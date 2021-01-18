import Head from "next/head"
import { Fragment, useLayoutEffect } from "react"
import { useEffect, useMemo, useRef } from "react"
import { useState } from "react"
const nestingEntities = (result, entities, key) => {
  if (typeof entities === typeof "") {
    return {
      ...result,
      [key]: entities,
    }
  }
  return {
    ...result,
    ...Object.keys(entities).reduce((result, value) => {
      return nestingEntities(result, entities[value], key + "." + value)
    }, {}),
  }
}
const SelectList = ({ classes = {}, children = [], onSelected = () => {} }) => {
  const [update, setUpdate] = useState(Date.now())
  const ref = useRef({
    selectedkey: 0,
  })
  useEffect(() => {
    ref.current.children = children
    ref.current.length = children.length
    ref.current.selectedkey = Math.min(
      ref.current.selectedkey,
      children.length - 1
    )
    setUpdate(Date.now())
  }, [children])
  useLayoutEffect(() => {
    const handler = e => {
      switch (e.key) {
        case "ArrowUp":
          ref.current.selectedkey =
            (ref.current.length - 1 + ref.current.selectedkey) %
            ref.current.length
          setUpdate(Date.now())
          break
        case "Enter":
          onSelected(
            ref.current.children[ref.current.selectedkey],
            ref.current.selectedkey
          )
          setUpdate(Date.now())
          break
        case "ArrowDown":
          ref.current.selectedkey =
            (ref.current.length + 1 + ref.current.selectedkey) %
            ref.current.length
          setUpdate(Date.now())
          break

        default:
          break
      }
    }
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [])
  return (
    <div className={`SelectList ${classes.list}`}>
      <style>
        {`.SelectList .SelectList-item-${ref.current.selectedkey} {
          background:#e2e8f0
        }
       `}
      </style>
      {children.map((e, i) => (
        <div
          onClick={() => onSelected(ref.current.children[i])}
          className={`SelectList-item-${i} ${classes.item}`}
          key={e.props.id}
        >
          {e}
        </div>
      ))}
    </div>
  )
}
export default function Data({ data }) {
  const state = useMemo(
    () =>
      data.reduce(
        (res, value) => {
          let { entities, ids } = res
          ids.push([value.id, value.name])
          entities = nestingEntities(entities, value, value.id)
          return {
            entities,
            ids,
          }
        },
        { entities: {}, ids: [] }
      ),
    []
  )
  const allkeys = useMemo(() => {
    return Object.keys(state.entities)
  }, [])
  const attrskeys = useMemo(() => {
    return Object.keys(state.entities)
  }, [])
  const [selectKey, setselectKey] = useState()
  const [filterFn, setFilterFn] = useState(() => Boolean)
  const [filterValue, setFilterValue] = useState(() => Boolean)
  return (
    <div className="w-full flex  flex-wrap overflow-x-auto">
      <style>
        {`.list {
          counter-reset: section;
        }

        .row {
          counter-increment: section;
          
        }
        .rowCount::before {
          content: "rows number: " counter(section);
        }`}
      </style>
      <div className="list w-screen border border-gray-400 max-w-sm w-full mx-auto h-screen overflow-auto flex flex-col">
        <div className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-full flex">
          <input
            onChange={e => {
              setFilterFn(() => key => key.includes(e.target.value))
            }}
            className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-1/2"
          ></input>
          <input
            onChange={e => {
              setFilterValue(() => key =>
                key.toLocaleLowerCase().includes(e.target.value)
              )
            }}
            className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-1/2"
          ></input>
        </div>
        <SelectList
          onSelected={e => setselectKey(e.key)}
          classes={{
            list: " p-1 space-y-1 flex-1 flex flex-col",
            item:
              "bg-gray-100 row hover:bg-gray-200 p-2 space-x-3 flex justify-between",
          }}
        >
          {useMemo(
            () =>
              allkeys
                .filter(key => {
                  return filterFn(key) && filterValue(state.entities[key])
                })
                .map(key => (
                  <Fragment key={key}>
                    <div>{key}</div>
                    <div
                      tabIndex={0}
                      title={state.entities[key]}
                      className="text-gray-600 truncate"
                    >
                      {state.entities[key]}
                    </div>
                  </Fragment>
                )),
            [state, filterFn, filterValue]
          )}
        </SelectList>
        <div className="flex-1" />
        <div className="rowCount border border-gray-400 sticky bottom-0 px-2 bg-gray-100 "></div>
      </div>
      <div className="border w-screen border-gray-400 flex-1 w-0 h-screen overflow-auto">
        <div className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-full flex">
          {selectKey ? (
            <input
              value={selectKey.split(".")[0]}
              onChange={e => {
                setselectKey(e.target.value)
              }}
              className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-full"
            ></input>
          ) : (
            <input
              onChange={e => {
                setselectKey(e.target.value)
              }}
              className="border border-gray-400 sticky top-0 z-10 bg-white p-2 block shadow-inner w-full"
            ></input>
          )}
        </div>
        <div className="p-1 space-y-1">
          {selectKey &&
            allkeys
              .filter(key => {
                return key.includes(selectKey.split(".")[0])
              })
              .map(key => (
                <div
                  className="bg-gray-100 hover:bg-gray-200 p-2 space-x-3 flex justify-between"
                  key={key}
                >
                  <div>{key}</div>
                  <div
                    tabIndex={0}
                    title={state.entities[key]}
                    className="text-gray-600 truncate"
                  >
                    {state.entities[key]}
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* <pre className="w-full">{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds")
  const data = await res.json()
  // craw()
  return {
    props: {
      data,
    },
  }
}
