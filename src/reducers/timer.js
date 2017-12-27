const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_SWITCH_OVER':
      return state.start
        ? {...state, counting: !state.counting}
        : {...state, counting: !state.counting, start: action.now}
    case 'TIMER_ADJUSTED':
      return {...state, remain: action.remain}
    case 'TIMER_TICKED':
      return {...state, remain: state.remain-1};
    case 'INIT':
      return {...state, counting: false, remain: 1500, start: null, finished: false };
    case 'WORK_FINISHED':
      return {...state, counting: false, remain: 0, finished: true};
    default:
      return state;
  }
};

export default timer;
