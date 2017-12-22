import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Statistic, Image } from 'semantic-ui-react';
import { fetchTweets } from '../actions';
import TwitterIcon from '../assets/twitter.png';

const TweetsWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
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
        <Statistic>
          <Statistic.Value>
            <Image src={TwitterIcon} className='inline'/>
            {this.props.tweets ? this.props.tweets : 0}
          </Statistic.Value>
          <Statistic.Label>Tweets</Statistic.Label>
        </Statistic>
      </TweetsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TweetsContainer);
