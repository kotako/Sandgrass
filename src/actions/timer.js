import Moment from 'moment';

export const switchOver = () => {
  return {
    type: 'TIMER_SWITCH_OVER',
    now: Moment().unix()
  }
}

export const adjust = (remain) => {
  const times = [10, 600, 1500, 3000];
  return {
    type: 'TIMER_ADJUSTED',
    remain: times[(times.indexOf(remain) + 1) % times.length]
  }
}

export const tick = () => {
  return { type: 'TIMER_TICKED' }
}

export const init = () => {
  return { type: 'INIT' }
}

export const finish = () => {
  return {
    type: 'WORK_FINISHED',
    now: Moment().unix()
  }
}

export const setAlerm = (url) => {
  return {
    type: 'TIMER_ALERM_SET',
    url: url
  }
}

export const switchAlerm = () => {
  return {
    type: 'TIMER_ALERM_SWITCH'
  }
}
