const contributions = (state = {}, action) => {
  switch (action.type) {
    case 'CONTRIBUTIONS_FETCHED':
      return {...state, commits: 0}
    default:
      return state;
  }
}

export default contributions;
