import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { switchOver, init, tick, adjust, finish } from '../actions/timer.js'

class TimerBoard extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
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
        onStartClick={() => this.props.dispatch(switchOver())}
        onResetClick={() => this.props.dispatch(init())}
        onAdjustClick={() => this.props.dispatch(adjust(this.props.state.timer.remain))}/>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TimerBoard);
