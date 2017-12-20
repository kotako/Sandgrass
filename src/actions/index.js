export const timerAction = (counting) => {
  return dispatch => {
    counting
      ? dispatch(tick())
      : dispatch(none())
  };
}

export const timerSwitch = () => {
  return { type: 'TIMER_BUTTON_SWITCH' }
}

export const tick = () => {
  return { type: 'TIMER_TICK' }
}

export const none = () => {
  return { type: 'default' }
}

export const init = () => {
  return { type: 'TIMER_INIT' }
}
