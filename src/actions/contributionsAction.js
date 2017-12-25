import Moment from 'moment';

// Contributions Container
export function fetchContributions(start) {
  return async dispatch => {
    // コミット数をカウント
    const events = await fetchJson(`https://api.github.com/users/Takorras/events`);
    const commits = getCommits(events, start);
    dispatch(receiveCommits(commits.length));

    // レポジトリの情報を確認
    const workingReposUrl = getWorkingRepos(events, start);
    const workingRepos = await fetchReposArray(workingReposUrl);
    const langs = getWorkingLanguages(workingRepos);
    dispatch(receiveLanguages(langs));
  }
}

function fetchJson(url) {
  return (async () => {
    const res = await fetch(url);
    return await res.json();
  })();
}

function fetchReposArray(urls) {
  return (async () => {
    return await Promise.all(urls.map(async (url) => {
      return await fetchJson(url);
    }));
  })();
}

function getCommits(json, start) {
  const commits = [].concat.apply([], json
    .filter((element, index, array) => {
      return ((Moment(element.created_at).unix() > start) && (element.type === 'PushEvent'));
    })
    .map((element, index, array) => {
      return element.payload.commits;
    }));
  return commits;
}

function getWorkingRepos(json, start) {
  const reposUrl = [].concat.apply([], json
    .filter((element, index, array) => {
      return (Moment(element.created_at).unix() > start);
    })
    .map((element, index, array) => {
      return element.repo.url;
    })
    .filter((element, index, array) => {
      return (array.indexOf(element) === index);
    })
  );
  return reposUrl;
}

function getWorkingLanguages(repos) {
  const langs = [].concat.apply([], repos
    .map((element, index, array) => {
      return element.language;
    })
    .filter((element, index, array) => {
      return (array.indexOf(element) === index);
    })
  );
  console.log(langs);
  return langs;
}

export const receiveCommits = (commits) => {
  return {
    type: 'FETCH_COMMITS_SUCCESS',
    commits: commits
  }
}

export const receiveLanguages = (langs) => {
  return {
    type: 'FETCH_LANGUAGES_SUCCESS',
    langs: langs
  }
}
