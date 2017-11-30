export const ACTION_TYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

const initialState = {
  count: 0,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      }
    case ACTION_TYPE.RESET:
      return {
        ...state,
        count: 0,
      }
    default:
      return state
  }
}
