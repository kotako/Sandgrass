const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, name: action.name, profileURL: action.profileURL}
    case 'FETCH_FLIP_SUCCESS':
      return {...state, flips: action.flips, flipsArrayToday: action.flipsArrayToday};
    case 'LOGIN_FAILED':
      return {...state, notAuthorized: true}
    default:
      return state;
  }
}

export default user;
