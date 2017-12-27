import Moment from 'moment';

export const timerSwitch = () => {
  return {
    type: 'TIMER_BUTTON_SWITCH',
    now: Moment().unix()
  }
}

export const adjustTimer = (remain) => {
  const times = [10, 600, 1500, 3000];
  return {
    type: 'TIMER_ADJUSTED',
    remain: times[(times.indexOf(remain) + 1) % times.length]
  }
}

export const tick = () => {
  return { type: 'TIMER_TICK' }
}

export const init = () => {
  return { type: 'INIT' }
}

export const finish = () => {
  return {
    type: 'WORK_FINISHED'
  }
}
