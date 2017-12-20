import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchContributions } from '../actions';

const ContributionsWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
`

const Figure = styled.h1`
  font-size: 6.4em;
`

const Statement = styled.h1`
  font-size: 2.4em;
`

class ContributionContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.dispatch(fetchContributions()) },
      180000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <ContributionsWrapper>
        <Figure>{this.props.state.contribution ? this.props.state.contribution.commits : 0}</Figure>
        <Statement>Contributions</Statement>
      </ContributionsWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(ContributionContainer);
