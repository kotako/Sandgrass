import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { timerAction, timerSwitch, init } from '../actions'

class TimerContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(init())
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.dispatch(timerAction(this.props.state.timer.counting)) },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Timer
          counting={this.props.state.timer.counting}
          remain={this.props.state.timer.remain}
          onClick={() => this.props.dispatch(timerSwitch())}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {state: {...state}};
};

export default connect(mapStateToProps)(TimerContainer);
