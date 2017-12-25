const qiitaCard = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_QIITA_ISSUES_SUCCESS':
      console.log(action.issues);
      return { ...state, issues: action.issues };
    default:
      return state;
  }
}

export default qiitaCard;
