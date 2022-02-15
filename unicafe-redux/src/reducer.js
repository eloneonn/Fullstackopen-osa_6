const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      var newState = {...state}
      newState.good++
      return newState
    case 'OK':
      var newState = {...state}
      newState.ok++
      return newState
    case 'BAD':
      var newState = {...state}
      newState.bad++
      return newState
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer