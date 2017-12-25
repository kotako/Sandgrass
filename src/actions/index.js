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
