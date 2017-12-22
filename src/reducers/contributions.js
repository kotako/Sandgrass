const contributions = (state = {}, action) => {
  switch (action.type) {
    case 'CONTRIBUTIONS_WITHIN_WORK_TIME':
      return {...state, commits: action.json.length};
    case 'INIT':
      return {...state, commits: 0};
    default:
      return state;
  }
}

export default contributions;
