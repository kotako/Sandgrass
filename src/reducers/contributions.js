const contributions = (state = {}, action) => {
  switch (action.type) {
    case 'CONTRIBUTIONS_WITHIN_WORK_TIME':
      return {...state, commits: action.json.length}
    default:
      return state;
  }
}

export default contributions;
