export function reducer(state, { type, payload }) {
  switch (type) {
    case "merge":
      return { ...state, ...payload }

    default:
      throw new Error()
  }
}
