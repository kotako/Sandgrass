import Moment from 'moment';

export const init = () => {
  return { type: 'INIT' }
}

export const tick = () => {
  return { type: 'TIMER_TICKED' }
}

export const pause = () => {
  return { type: 'TIMER_PAUSED' }
}

export const start = () => {
  return { type: 'TIMER_STARTED', now: Moment().unix() }
}

export const finish = () => {
  return { type: 'TIMER_FINISHED', now: Moment().unix() }
}

export const adjust = () => {
  return { type: 'TIMER_ADJUSTED' }
}

export const modalClose = () => {
  return { type: 'FINISH_MODAL_CLOSE' }
}

export const setBreak = (breakTime) => {
  return { type: 'TIMER_BREAK_SET', breakTime: breakTime }
}
