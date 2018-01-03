import React from 'react';
import { connect } from 'react-redux';
import QiitaCard from '../components/QiitaCard';
import { fetchQiitaIssues } from '../actions/qiita.js';

class QiitaCardContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchQiitaIssues());
    this.interval = setInterval(() => {
      this.props.dispatch(fetchQiitaIssues(this.props.langs));
    },
      300000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <QiitaCard issues={this.props.issues}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    langs: state.user.langs,
    issues: state.qiitaCard.issues
  };
}

export default connect(mapStateToProps)(QiitaCardContainer);
