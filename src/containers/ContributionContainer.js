import React from 'react';
import { connect } from 'react-redux';
import { fetchContributions } from '../actions/contribution.js';
import ContributionLabel from '../components/ContributionLabel';

class ContributionContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.state.timer.counting) {
        this.props.dispatch(fetchContributions(this.props.state.user.name, this.props.state.timer.startedAt))
      }},
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return ( <ContributionLabel commits={this.props.state.contributions.commits}/>)
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(ContributionContainer);
