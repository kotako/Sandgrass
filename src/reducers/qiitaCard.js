const qiitaCard = (state={}, action) => {
  switch (action.type) {
    case 'QIITA_ISSUES_FETCHED':
      return { ...state, issues: action.json };
    default:
      return state;
  }
}

export default qiitaCard;
