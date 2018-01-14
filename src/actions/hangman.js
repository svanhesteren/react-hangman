export const GUESS = 'GUESS'

export default (choice) => {
  return {
    type: GUESS,
    payload: choice
  }
}
