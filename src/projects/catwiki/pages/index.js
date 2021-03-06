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
const catSvg = (
  <svg
    className="inline"
    fill="currentColor"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    xmlSpace="preserve"
  >
    <g>
      <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
        <path d="M1607.2,4071.3c-410.8-109.5-570.6-239.6-741.8-591.1C680.5,3099,612.1,2742.9,657.7,2416.6c68.5-458.8,235.1-874.1,584.3-1460.7l255.6-429.1l-16-189.5c-9.1-105-43.4-310.4-75.3-454.2c-34.2-143.8-68.5-362.9-82.2-483.9c-13.7-130.1-41.1-264.7-68.5-328.7c-79.9-180.3-239.6-378.9-449.6-561.4l-203.1-175.8l-146.1-360.6c-226-561.5-253.3-641.3-301.3-901.5c-22.8-132.4-47.9-255.6-54.8-273.9c-13.7-34.2,146.1-230.5,216.8-269.3c57.1-29.7,146.1,11.4,198.6,89c27.4,43.3,38.8,111.8,41.1,253.3c0,175.8,11.4,216.8,107.3,454.2c59.3,143.8,132.4,287.6,164.3,319.5c125.5,130.1,289.9,203.1,698.4,308.1c219.1,54.8,429.1,114.1,467.9,127.8c57.1,20.5,70.8,18.3,95.9-13.7c41.1-54.8,36.5-116.4-16-392.5c-25.1-127.8-45.6-278.4-45.6-333.2c0-205.4,255.6-595.7,680.1-1040.7l175.7-184.9l271.6,6.8c262.5,6.8,271.6,9.1,317.3,66.2c38.8,54.8,41.1,68.5,13.7,123.3c-45.6,93.6-136.9,150.6-267,166.6c-111.8,16-125.5,25.1-310.4,226c-203.1,219.1-235.1,278.4-210,401.7c18.3,95.9,235.1,413.1,417.7,614c102.7,111.8,175.7,219.1,235.1,351.5c79.9,171.2,95.9,191.7,152.9,194c728.1,20.5,938,38.8,1063.6,84.5l130.1,47.9l200.8-57.1c538.7-148.4,495.3-127.8,502.1-225.9c13.7-157.5-86.7-787.4-157.5-995.1c-59.4-175.7-66.2-228.2-66.2-470.2c0-244.2,4.6-280.7,47.9-335.5c45.7-57.1,54.8-59.3,280.7-59.3c262.5,0,287.6,11.4,287.6,139.2c0,66.2-16,98.2-68.5,141.5c-36.5,32-89,66.2-114.1,73c-93.6,29.7-38.8,189.4,248.8,739.5c367.5,707.5,415.4,755.5,725.8,755.5c109.6,0,219.1,13.7,283,38.8l107.3,36.5l146.1-105c159.8-111.8,292.1-248.8,292.1-299c0-43.3,152.9-178,730.4-643.6c269.3-219.1,547.8-445,616.2-502.1c68.5-59.4,166.6-125.5,219.1-148.3c50.2-22.8,139.2-84.5,196.3-134.7l105-91.3H9527c237.4,0,244.2,2.3,310.4,66.2c86.7,89,84.5,141.5-13.7,228.2c-73,63.9-95.9,70.8-226,70.8H9454l-182.6,189.4c-399.4,410.8-582,634.5-732.6,899.3c-237.4,413.1-228.2,365.2-237.4,1116.1l-6.8,661.9l77.6,152.9c84.4,166.6,225.9,312.7,397.1,413.1c86.7,52.5,148.3,66.2,335.5,82.2c125.5,11.4,237.4,25.1,248.8,31.9c9.1,6.9,66.2,95.9,125.5,198.6c77.6,130.1,105,200.8,95.8,237.4c-6.8,29.7-79.9,134.6-159.8,235.1c-82.2,100.4-155.2,210-164.3,241.9c-20.6,84.5-210,248.8-362.9,312.7l-127.8,54.8l6.8,228.2c6.8,223.7,4.6,228.2-43.4,223.7c-31.9-4.6-52.5,9.1-57.1,34.2c-6.8,29.7-77.6-27.4-271.6-216.8c-230.5-226-283-267-477-356c-166.6-79.9-264.7-146.1-415.4-283C7393,978.7,7230.9,860,7141.9,812.1c-148.3-82.2-173.4-89-344.6-86.7c-100.4,0-303.6,20.5-449.6,45.6c-146.1,25.1-369.7,57.1-495.3,70.8c-125.5,13.7-511.2,68.5-855.9,125.5c-951.7,150.6-1024.8,159.8-1517.8,157.5c-326.4,0-575.2-16-876.4-52.5l-420-50.2l-123.3,63.9c-152.9,77.6-415.4,315-493,447.3c-130.1,221.4-312.7,887.8-312.7,1136.6c2.3,248.8,118.7,620.8,235.1,746.3c107.3,116.4,374.3,198.6,529.5,164.3c82.2-18.3,178-79.9,248.8-157.5c66.2-73,164.3-63.9,207.7,20.6c43.4,84.5,43.4,235.1,2.3,317.2c-43.4,84.5-216.8,239.6-330.9,296.7C2036.3,4114.6,1787.5,4121.5,1607.2,4071.3z" />
      </g>
    </g>
  </svg>
)
const searchSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
  </svg>
)
const randomArrayInRange = (min, max, n) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )

const getImageUrl = breed => `/static/images/${breed}.png`
export default function Home({ data }) {
  const randomIndex = randomArrayInRange(0, data.length, 10)
  let count = 0
  return (
    <div
      id="capture"
      style={{
        color: "#4D270C",
      }}
      className="w-full flex container mx-auto flex-wrap overflow-x-auto px-4 flex flex-col"
    >
      <header
        style={{
          fontFamily: "Mystery Quest",
        }}
        className="py-3 text-2xl w-full"
      >
        CatWiki <span className="text-4xl leading-none">{catSvg}</span>
      </header>
      <main className="space-y-12 lg:space-y-24 w-full flex flex-col">
        <section
          style={{ background: "#E3E1DC" }}
          className="rounded-3xl overflow-hidden"
        >
          <div
            style={{ background: "#050709" }}
            className="grid grid-cols-2  overflow-hidden"
          >
            <div
              style={{ paddingTop: "20%", paddingBottom: "20%" }}
              className="px-6 md:px-12 lg:px-24 col-span-1 w-full pb-6 h-full space-y-4 text-white flex-1"
            >
              <div className="space-y-2">
                <h1
                  className="text-xl md:text-4xl lg:text-6xl"
                  style={{
                    fontFamily: "Mystery Quest",
                  }}
                >
                  CatWiki
                </h1>
                <h2 className="text-sm lg:text-base">
                  Get to know more about your cat breed
                </h2>
              </div>
              <div className="flex justify-start mt-6">
                <div className="relative overflow-hidden shadow-inner max-w-sm flex items-center justify-start md:w-full bg-white text-gray-700 rounded-2xl">
                  <div className="relative h-10 flex-1 items-center">
                    <div className="pl-3 md:hidden opacity-50 leading-10">
                      Search
                    </div>
                    <div className="pl-3 hidden md:block opacity-50 leading-10">
                      Enter your breed
                    </div>
                    <input className="absolute left-0 top-0 w-full leading-10 hover:opacity-100 opacity-0 bg-white h-full pl-3 focus:outline-none"></input>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center">
                    {searchSvg}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full col-span-1 flex-1 flex-shrink-0  h-full relative overflow-hidden ">
              <div
                style={{
                  paddingTop: "100%",
                }}
              />
              <div
                className="absolute w-full h-full left-0 top-0 bg-cover transform scale-150"
                style={{
                  backgroundPositionY: "30%",
                  backgroundImage: `url("/banner.png")`,
                }}
              ></div>
            </div>
          </div>
          <div className="px-6 md:px-12 lg:px-24 md:pb-12 lg:pb-24 pt-4 md:pt-8 lg:pt-12 pb-6 space-y-6 font-semibold text-sm">
            <div className="inline-block  md:text-lg lg:text-xl">
              Most Searched Breeds
              <div
                style={{
                  height: "2px",
                  background: "#4D270C",
                  width: "30%",
                  minWidth: "20px",
                }}
              ></div>
            </div>
            <div className="max-w-sm text-3xl font-bold leading-tight">
              66+ Breeds For you to discover
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-12">
              {new Array(4)
                .fill(() => (
                  <div className="col-span-1 space-y-1">
                    <div
                      className="relative"
                      style={{
                        paddingTop: "100%",
                      }}
                    >
                      <img
                        className="w-full h-full absolute left-0 top-0 rounded-xl object-cover"
                        src={getImageUrl(data[randomIndex[count++]].id)}
                      />
                    </div>
                    <div className="font-bold">
                      {data[randomIndex[count]].name}
                    </div>
                  </div>
                ))
                .map(item => item())}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 md:px-12 lg:px-24">
          <div className="space-y-6 col-span-1">
            <div className="inline-block space-y-3">
              <div
                style={{
                  height: "2px",
                  background: "#4D270C",
                  width: "30%",
                  minWidth: "20px",
                }}
              ></div>
              <h2 className="text-5xl font-bold leading-tight">
                Why should you have a cat?
              </h2>
            </div>
            <div className="text-lg font-semibold">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </div>
            <div>
              <button className="inline-flex items-center space-x-3">
                <span className="font-semibold text">READ MORE</span>
                <span>
                  <svg
                    stroke="c
urrentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-1 relative">
            <div style={{ width: "100%", paddingTop: "100%" }}></div>
            <div className="absolute top-0 left-0 w-full h-full grid  grid-rows-5 grid-cols-11 grid-flow-col gap-4">
              <div className="col-start-1 col-end-7 row-start-1 row-end-3 rounded-xl object-cover bg-gray-100">
                <img
                  className="object-cover w-full h-full rounded-2xl"
                  src={getImageUrl(data[randomIndex[count++]].id)}
                ></img>
              </div>
              <div className="col-start-7 col-end-12 row-start-1 row-end-5 rounded-xl object-cover bg-gray-100">
                <img
                  className="object-cover w-full h-full rounded-2xl"
                  src={getImageUrl(data[randomIndex[count++]].id)}
                ></img>
              </div>
              <div className="col-start-2  col-end-7 row-start-3 row-end-6 rounded-xl object-cover bg-gray-100">
                <img
                  className="object-cover w-full h-full rounded-2xl"
                  src={getImageUrl(data[randomIndex[count++]].id)}
                ></img>
              </div>
            </div>
          </div>
        </section>
        <div />
      </main>
      <footer className="px-6 text-white md:px-12 lg:px-24 space-y-3 md:space-y-6 lg:space-y-12 pb-3 md:pb-6 lg:pb-12 flex items-center flex-wrap rounded-t-3xl  bg-black">
        <div></div>
        <div
          style={{
            fontFamily: "Mystery Quest",
          }}
          className="text-xl  overflow-hidden whitespace-no-wrap"
        >
          CatWiki <span className="text-3xl leading-none">{catSvg}</span>
        </div>
        <div className="flex-1" />
        <div>© cafejs - devchallenge.io 2020</div>
      </footer>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds")
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
