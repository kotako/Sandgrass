export const fetchQiitaIssues = (langs) => {
  return async dispatch => {
    let query = '';
    if (langs) {
      langs.forEach((element, index, array) => {
        query += `+${element}`;
      })
      query = query.substring(1);
    }

    const issues = query
      ? await fetchJson(`https://qiita.com/api/v2/items?per_page=3&query=${query}`)
      : await fetchJson('https://qiita.com/api/v2/items')
    dispatch(receiveQiitaIssues(issues));
  }
}

function fetchJson(url) {
  return (async () => {
    const res = await fetch(url);
    return await res.json();
  })();
}

export const receiveQiitaIssues = (json) => {
  return {
    type: 'FETCH_QIITA_ISSUES_SUCCESS',
    issues: json
  }
}
