const settings = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_SETTINGS_SUCCESS':
      return { ...state,  value: action.response, loading: false };
    case 'LOADING_SETTINGS':
      return {...state, loading: true}
    default:
      return state;
  }
}

export default settings;
