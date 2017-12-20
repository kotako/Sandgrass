const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_BUTTON_SWITCH':
      return state.counting
        ? {...state, counting: !state.counting, end: action.now}
        : {...state, counting: !state.counring, start: action.now}
    case 'TIMER_TICK':
      return {...state, remain: state.remain-1};
    case 'TIMER_INIT':
      return {...state, counting: false, remain: 1500 };
    default:
      return state;
  }
};

export default timer;
