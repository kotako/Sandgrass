const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_BUTTON_ACTION':
      return {...state, counting: state.counting ? false : true}
    default:
      return state;
  }
}

export default timer;
