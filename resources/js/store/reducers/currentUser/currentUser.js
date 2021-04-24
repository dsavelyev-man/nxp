const defState = {
  auth: false,
  loaded: false,
  user: null,
}

export default function currentUser(state=defState, action) {
  switch (action.type) {
    case "UPDATE_CURRENT_USER":

      return action.payload
      break
  }
  return state
}