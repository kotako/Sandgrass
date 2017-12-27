import React from 'react';
import { connect } from 'react-redux';
import FlipLabel from '../components/FlipLabel';

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps)(FlipLabel);
