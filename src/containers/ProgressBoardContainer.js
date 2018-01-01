import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { fetchContributions } from '../actions/contribution.js';
import WorkTimeLabel from '../components/WorkTimeLabel';
import ContributionLabel from '../components/ContributionLabel';
import FlipLabel from '../components/FlipLabel';

class ProgressBoardContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.timer.counting) {
        this.props.dispatch(fetchContributions(this.props.userName, this.props.timer.startedAt))
      }},
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Grid columns={2} padded>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <FlipLabel flips={this.props.flipsToday} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <WorkTimeLabel working_time={this.props.flipsToday.reduce((sum, flip) => sum + flip.working_time, 0)}/>
          </Grid.Column>
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
    timer: state.timer,
    flipsToday: state.user.flipsArrayToday ? state.user.flipsArrayToday : [],
    userName: state.user.name,
    commits: state.contributions.commits
  };
}

export default connect(mapStateToProps)(ProgressBoardContainer);
