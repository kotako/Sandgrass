import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { init, tick, start, pause, finish, adjust } from '../actions/timer.js'
import { postFlip } from '../actions/flip.js';

class TimerContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.props.counting) return;
      if (this.props.remain <= 0) {
        this.props.dispatch(finish());
        this.props.dispatch(postFlip(
          this.props.userName,
          this.props.startedAt,
          this.props.finishedAt,
          this.props.commits,
          this.props.repos,
          this.props.langs
        ));
        return;
      }
      this.props.dispatch(tick());
    },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Timer
        counting={this.props.counting}
        remain={this.props.remain}
        started={this.props.startedAt ? true : false}
        onStartClick={() =>
          this.props.counting
            ? this.props.dispatch(pause())
            : this.props.dispatch(start())
        }
        onResetClick={() => this.props.dispatch(init())}
        onAdjustClick={() => this.props.dispatch(adjust())}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    counting: state.timer.counting,
    remain: state.timer.remain,
    startedAt: state.timer.startedAt,
    finishedAt: state.timer.finishedAt,
    userName: state.user.name,
    commits: state.contributions.commits,
    langs: state.contributions.langs,
    repos: state.contributions.repos
  }
};

export default connect(mapStateToProps)(TimerContainer);
