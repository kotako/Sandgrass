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
