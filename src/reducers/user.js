const user = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FLIP_SUCCESS':
      return {...state, flips: action.flips};
    default:
      return state;
  }
}

export default user;
