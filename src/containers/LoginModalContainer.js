import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import { authWithGitHub } from '../actions';

const mapStateToProps = state => {
  return state.auth;
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(authWithGitHub());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
