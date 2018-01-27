const contributions = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COMMITS_SUCCESS':
      return { ...state, commits: action.commits };
    case 'FETCH_LANGUAGES_SUCCESS':
      return { ...state, langs: action.langs };
    case 'FETCH_REPOS_SUCCESS':
      return { ...state, repos: action.repos };
    case 'INIT':
      return { ...state, commits: 0 };
    default:
      return state;
  }
}

export default contributions;
