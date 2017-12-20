import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { timerButtonAction } from '../actions'

const mapStateToProps = state => (
  state.timer
);

const mapDispatchToProps = dispatch => (
  {onClick: () => (
      dispatch(timerButtonAction())
  )}
)

const TimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)

export default TimerContainer;
