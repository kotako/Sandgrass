import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Board from '../Board';
import HeaderMenu from '../HeaderMenu';
import { authWithGitHub, redirectToGitHub } from '../../actions/auth.js';
import LoginModal from '../LoginModal';

const Wrapper = styled.div`
  background-color: #1C1C1C;
  height: 100vh;
`

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(authWithGitHub())
  }

  render() {
    return (
      <Wrapper>
        <HeaderMenu />
        <Wrapper>
        <Board counting={this.props.state.timer.counting}/>
        </Wrapper>
        <LoginModal
          open={this.props.state.user.notAuthorized}
          onClick={() => this.props.dispatch(redirectToGitHub())}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(App);
