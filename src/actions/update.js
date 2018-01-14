export const UPDATE = 'UPDATE'

export default (choice) => {
  return {
    type: UPDATE,
    payload: choice
  }
}
