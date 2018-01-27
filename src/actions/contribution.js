import Moment from 'moment';

export function fetchContributions(name, start) {
  return async dispatch => {
    // コミット数をカウント
    const events = await fetchJson(`https://api.github.com/users/${name}/events`);
    const commits = getCommits(events, start);
    dispatch(receiveCommits(commits.length));

    // レポジトリの情報を確認
    const workingReposUrl = getWorkingRepos(events, start);
    const langs = await fetchWorkingLangs(workingReposUrl);
    dispatch(receiveLanguages(langs));
  }
}

const fetchJson = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const getCommits = (json, startedAt) => {
  return [].concat(...json
    .filter(element => (Moment(element.created_at).unix() > startedAt) && (element.type === 'PushEvent'))
    .map(element => element.payload.commits ));
}

const getWorkingRepos = (json, startedAt) => {
  return [].concat(...json
    .filter(element => Moment(element.created_at).unix() > startedAt)
    .map(element => element.repo.url)
    .filter((element, index, array) => array.indexOf(element) === index)
  )
}

const fetchWorkingLangs = async (urlArray) => {
  if (urlArray.length === 0) return [];
  const repos = await Promise.all(urlArray.map(async url => await fetchJson(url)))
  return [].concat(...repos
      .map(element => element.language)
      .filter((element, index, array) => array.indexOf(element) === index)
    )
}

export const receiveCommits = (commits) => {
  return { type: 'FETCH_COMMITS_SUCCESS', commits: commits }
}

export const receiveLanguages = (langs) => {
  return { type: 'FETCH_LANGUAGES_SUCCESS', langs: langs }
}
