const qiitaCard = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_QIITA_ISSUES_SUCCESS':
      return { ...state, issues: action.issues };
    default:
      return state;
  }
}

export default qiitaCard;
