import { UPDATE } from '../actions/update'

const choices = {
  choicesLeft: 6
}

export default function (state = choices, action) {
  switch (action.type){
    case UPDATE :
      console.log(action.payload);
      const newState = action.payload
      return {choicesLeft: newState-1}
    default :
      return state
  }
}
