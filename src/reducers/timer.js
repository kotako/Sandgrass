const timer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, counting: false, remain: 1500, startedAt: null, finishedAt: null, finishModalOpen: false };
    case 'TIMER_TICKED':
      return { ...state, remain: state.remain-1 }
    case 'TIMER_PAUSED':
      return { ...state, counting: false }
    case 'TIMER_STARTED':
      return state.startedAt
        ? { ...state, counting: true }
        : { ...state, counting: true, startedAt: action.now }
    case 'TIMER_ADJUSTED':
      const times = [10, 600, 1500, 3000];
      return { ...state, remain: times[(times.indexOf(state.remain)+1)%times.length] }
    case 'TIMER_FINISHED':
      return { ...state, counting: false, remain: 0, finishedAt: action.now, finishModalOpen: true }
    case 'FINISH_MODAL_CLOSE':
      return { ...state, finishModalOpen: false }
    default:
      return state;
  }
};

export default timer;
