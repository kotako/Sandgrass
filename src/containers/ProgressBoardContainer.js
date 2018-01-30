import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { fetchContributions } from '../actions/contribution.js';
import ContributionLabel from '../components/ContributionLabel';
import FlipLabel from '../components/FlipLabel';

class ProgressBoardContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.counting && !this.props.breaking) {
        this.props.dispatch(fetchContributions(this.props.userName, this.props.startedAt, this.props.accessToken));
      }},
      20000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <FlipLabel flips={this.props.flipsToday} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ContributionLabel commits={this.props.commits}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    breaking: state.timer.breaking,
    counting: state.timer.counting,
    startedAt: state.timer.startedAt,
    flipsToday: state.user.flipsArrayToday || [],
    userName: state.user.name,
    accessToken: state.user.accessToken,
    commits: state.contributions.commits
  };
}

export default connect(mapStateToProps)(ProgressBoardContainer);
