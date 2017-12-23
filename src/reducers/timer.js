const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_BUTTON_SWITCH':
      return state.start
        ? {...state, counting: !state.counting}
        : {...state, counting: !state.counting, start: action.now}
    case 'TIMER_TICK':
      return {...state, remain: state.remain-1};
    case 'INIT':
      return {...state, counting: false, remain: 1500, start: null };
    default:
      return state;
  }
};

export default timer;
