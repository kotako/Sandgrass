const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, login: true}
    case 'LOGIN_FAILED':
      return {...state, login: false}
    default:
      return state;
  }
}

export default auth;
