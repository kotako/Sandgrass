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
        this.props.dispatch(postFlip());
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
        started={this.props.started}
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
    started: state.timer.startedAt
  }
};

export default connect(mapStateToProps)(TimerContainer);
