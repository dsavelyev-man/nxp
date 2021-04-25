const defState = [];

export default function posts(state=defState, action) {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload
      break
  }
  return state
}