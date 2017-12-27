import React from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import RelatedInfoBoard from '../RelatedInfoBoard';
import HeaderMenu from '../HeaderMenu';
import { fetchFlip } from '../../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFlip());
  }

  render() {
    return (
      <div>
        <HeaderMenu />
        <Board />
        <RelatedInfoBoard />
      </div>
    )
  }
}

export default connect()(App);
