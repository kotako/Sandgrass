const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_BUTTON_SWITCH':
      return {...state, counting: !state.counting};
    case 'TIMER_START':
      return {...state, remain: state.remain-1};
    case 'TIMER_INIT':
      return {...state, counting: false, remain: 1500 };
    default:
      return state;
  }
};

export default timer;
