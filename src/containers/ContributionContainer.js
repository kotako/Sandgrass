import React from 'react';
import { connect } from 'react-redux';
import { fetchContributions } from '../actions/contributionsAction.js';
import { Statistic, Image, Segment } from 'semantic-ui-react';
import GitHubIcon from '../assets/GitHub-Mark-Light-120px-plus.png';

class ContributionContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.state.timer.counting) {
        this.props.dispatch(fetchContributions(this.props.state.timer.start))
      }},
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Segment inverted color='green' textAlign='center'>
        <Image src={GitHubIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
        <Statistic inverted>
          <Statistic.Value>
            {this.props.state.contributions.commits ? this.props.state.contributions.commits : 0}
          </Statistic.Value>
          <Statistic.Label>Contributions</Statistic.Label>
        </Statistic>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(ContributionContainer);
