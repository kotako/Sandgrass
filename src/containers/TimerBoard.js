import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { timerSwitch, init, tick, adjustTimer, finish, fetchUserData } from '../actions'

class TimerBoard extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
    this.props.dispatch(fetchUserData())
    this.interval = setInterval(() => {
      // TODO: きれいにする
      if (this.props.state.timer.remain > 0) {
        if (this.props.state.timer.counting) {
          this.props.dispatch(tick());
        }
      } else {
        if (this.props.state.timer.counting) {
          this.props.dispatch(finish());
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
        onClick={() => this.props.dispatch(timerSwitch())}
        onResetClick={() => this.props.dispatch(init())}
        onAdjustClick={() => this.props.dispatch(adjustTimer(this.props.state.timer.remain))}/>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TimerBoard);
