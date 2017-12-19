import { connect } from 'react-redux';
import Timer from '../components/Timer';

const mapStateToProps = state => (
  state
);

const TimerContainer = connect(
  mapStateToProps
)(Timer)

export default TimerContainer;
