import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Board from '../components/Board';
import HeaderMenu from '../components/HeaderMenu';
import LoginModal from '../components/LoginModal';
import FinishModalContainer from './FinishModalContainer';
import { authWithGitHub, redirectToGitHub } from '../actions/auth.js';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #1C1C1C;
`

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(authWithGitHub())
  }

  render() {
    return (
      <Wrapper>
        <HeaderMenu />
        <Board counting={this.props.counting}/>
        <FinishModalContainer/>
        <LoginModal
          open={this.props.notAuthorized}
          onClick={() => this.props.dispatch(redirectToGitHub())}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    counting: state.timer.counting,
    notAuthorized: state.user.notAuthorized
  }
};

export default connect(mapStateToProps)(AppContainer);
