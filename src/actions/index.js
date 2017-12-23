import Moment from 'moment';

export const timerSwitch = () => {
  return {
    type: 'TIMER_BUTTON_SWITCH',
    now: Moment().unix()
  }
}

export const tick = () => {
  return { type: 'TIMER_TICK' }
}

export const init = () => {
  return { type: 'INIT' }
}

// Contributions Container
export function fetchContributions(start){
  return dispatch => {
    return fetch('https://api.github.com/users/Takorras/events')
      .then(response => response.json())
      .then(json => json.isArray ? Promise.reject() : json)
      .then(json => json.filter((element, index, array) => {
        return (Moment(element.created_at).unix() > start);
      }))
      .then(json => gitEventsExtractor(json))
      .then(json => dispatch(receiveJson(json)))
  }
}

const gitEventsExtractor = (json) => {
  return [].concat.apply([],
    json
      .filter((element, index, array) => {
        return (element.type === 'PushEvent');
      })
      .map((element, index, array) => {
        return element.payload.commits;
      })
    );
}

export const receiveJson = (json) => {
  return {
    type: 'CONTRIBUTIONS_WITHIN_WORK_TIME',
    json: json,
  }
}

// Tweets container
export const fetchTweets = () => {
  return {
    type: 'TWEETS_FETCHED'
  }
}

// Qiita Card Container
export const fetchQiitaIssues = () => {
  return dispatch => {
      return fetch('https://qiita.com/api/v2/items')
        .then(response => response.json())
        .then(json => json.isArray ? Promise.reject() : json)
        .then(json => json.filter((element, index, array) => {
          return (index < 3)
        }))
        .then(json => dispatch(receiveQiitaIssues(json)))
  }
}

export const receiveQiitaIssues = (json) => {
  return {
    type: 'QIITA_ISSUES_FETCHED',
    json: json
  }
}
