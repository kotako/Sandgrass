import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTweets } from '../actions';

const TweetsWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
`

const Figure = styled.h1`
  font-size: 6.4em;
`

const Statement = styled.h1`
  font-size: 2.4em;
`

class TweetsContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.dispatch(fetchTweets()) },
      180000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <TweetsWrapper>
        <Figure>{this.props.tweets ? this.props.tweets : 0}</Figure>
        <Statement>Tweets</Statement>
      </TweetsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TweetsContainer);
