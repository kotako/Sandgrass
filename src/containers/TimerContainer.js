import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { timerSwitch, init, tick } from '../actions'

class TimerContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if ((this.props.state.timer.remain > 0) === this.props.state.timer.counting) {
        this.props.dispatch(tick());
      } else {
        // 終了
      }},
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
        onResetClick={() => this.props.dispatch(init())}/>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(TimerContainer);
