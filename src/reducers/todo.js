const todo = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return {...state, items: []};
    case 'ADD_TODO_ITEM':
      const items = state.items;
      items.push(action.item);
      return {...state, items: items};
    default:
      return state;
  }
}

export default todo;
