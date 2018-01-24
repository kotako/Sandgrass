import React from 'react';
import { connect } from 'react-redux';
import { Card, Input, List } from 'semantic-ui-react';
import { addTodoItem } from '../actions/todo.js';

const TodosCardContainer = ({ dispatch, todos }) => {
  let input;
  return (
    <Card style={{minWidth: "400px"}}>
      <Card.Content>
        <Card.Header>
          Todos
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <ul>
          {todos}
        </ul>
        <form onSubmit={ e => {
          e.preventDefault();
          dispatch(addTodoItem(input.inputRef.value));
          input.inputRef.value = '';
        }}>
          <Input
            fluid
            ref={ value => input = value }
            placeholder='New Todos...' />
        </form>
      </Card.Content>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todo.items.map((element, index)=> <li key={index}>{element}</li>)
  }
}

export default connect(mapStateToProps)(TodosCardContainer);
