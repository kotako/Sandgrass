import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Statistic, Image, Card, Segment } from 'semantic-ui-react';
import { fetchTweets } from '../actions';
import TwitterIcon from '../assets/twitterIcon.png';

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
        <Card>
          <Segment inverted color='blue' padded='false'>
            <Image src={TwitterIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.tweets ? this.props.tweets : 0}
              </Statistic.Value>
              <Statistic.Label>Tweets</Statistic.Label>
            </Statistic>
          </Segment>
        </Card>
      </TweetsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TweetsContainer);
