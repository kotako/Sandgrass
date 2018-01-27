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
      : await fetchJson('https://qiita.com/api/v2/items?per_page=3')
    dispatch(receiveQiitaIssues(issues));
  }
}

const fetchJson = async (url) => {
  const res = await fetch(url);
  return res.json();
}

export const receiveQiitaIssues = (json) => {
  return { type: 'FETCH_QIITA_ISSUES_SUCCESS', issues: json }
}
