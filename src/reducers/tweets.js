const tweets = (state = {}, action) => {
  switch (action.type) {
    case 'TWEETS_FETCHED':
      return {...state, tweets: 0};
    default:
      return state;
  }
}

export default tweets;
