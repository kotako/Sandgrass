import React from 'react';
import { connect } from 'react-redux';
import QiitaCard from '../components/QiitaCard';
import { fetchQiitaIssues } from '../actions';

class QiitaCardContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchQiitaIssues());
  }

  render() {
    return (
      <QiitaCard issues={this.props.state.qiitaCard.issues}/>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

export default connect(mapStateToProps)(QiitaCardContainer);
