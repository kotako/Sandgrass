import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Board from '../Board';
import RelatedInfoBoard from '../RelatedInfoBoard';
import HeaderMenu from '../HeaderMenu';
import { fetchFlip } from '../../actions';

const Wrapper = styled.div`
  background-color: #F1F1F1;
`

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFlip());
  }

  render() {
    return (
      <Wrapper>
        <HeaderMenu />
        <Board />
        <RelatedInfoBoard />
      </Wrapper>
    )
  }
}

export default connect()(App);
