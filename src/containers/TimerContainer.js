import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { switchOver, init, tick, adjust, finish } from '../actions/timer.js'
import { postFlip } from '../actions';

class TimerContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // TODO: きれいにする
      if (this.props.state.timer.remain > 1) {
        if (this.props.state.timer.counting) {
          this.props.dispatch(tick());
        }
      } else {
        if (this.props.state.timer.counting) {
          this.props.dispatch(finish(this.props.state));
          this.props.dispatch(postFlip(
            this.props.state.user.name,
            this.props.state.timer.startedAt,
            this.props.state.timer.finishedAt,
            this.props.state.contributions.commits,
            this.props.state.contributions.repos,
            this.props.state.contributions.langs
          ));
        }
      }
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
        counting={this.props.state.timer.counting}
        remain={this.props.state.timer.remain}
        startedAt={this.props.state.timer.startedAt}
        onStartClick={() => this.props.dispatch(switchOver())}
        onResetClick={() => this.props.dispatch(init())}
        onAdjustClick={() => this.props.dispatch(adjust(this.props.state.timer.remain))}/>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TimerContainer);
