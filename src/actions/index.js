export const timerAction = (counting) => {
  return dispatch => {
    counting
      ? dispatch(start())
      : dispatch(stop())
  };
}

export const timerSwitch = () => {
  return { type: 'TIMER_BUTTON_SWITCH' }
}

export const start = () => {
  return { type: 'TIMER_START' }
}

export const stop = () => {
  return { type: 'default' }
}

export const init = () => {
  return { type: 'TIMER_INIT' }
}
