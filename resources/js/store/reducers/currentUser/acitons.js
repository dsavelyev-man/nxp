export function updateCurrentUser(values) {
  return {
    type: "UPDATE_CURRENT_USER",
    payload: {
      ...values
    }
  }
}