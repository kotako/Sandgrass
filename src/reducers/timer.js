const timer = (state = {}, action) => {
  switch (action.type) {
    case 'TIMER_SWITCH_OVER':
      return state.startedAt
        ? {...state, counting: !state.counting}
        : {...state, counting: !state.counting, startedAt: action.now}
    case 'TIMER_ADJUSTED':
      return {...state, remain: action.remain}
    case 'TIMER_TICKED':
      return {...state, remain: state.remain-1};
    case 'INIT':
      return {...state, counting: false, remain: 1500, startedAt: null, finishedAt: null };
    case 'WORK_FINISHED':
      return {...state, counting: false, remain: 0, finishedAt: action.now};
    default:
      return state;
  }
};

export default timer;
