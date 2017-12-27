import React from 'react';
import { connect } from 'react-redux';
import QiitaCard from '../components/QiitaCard';
import { fetchQiitaIssues } from '../actions/qiitaAction.js';

class QiitaCardContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchQiitaIssues());
    this.interval = setInterval(() => {
      this.props.dispatch(fetchQiitaIssues(this.props.state.contributions.langs));
    },
      300000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
