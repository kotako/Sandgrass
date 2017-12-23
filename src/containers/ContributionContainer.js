import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchContributions } from '../actions';
import { Statistic, Image, Card, Segment } from 'semantic-ui-react';
import GitHubIcon from '../assets/GitHub-Mark-Light-120px-plus.png';

const ContributionsWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
`

class ContributionContainer extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.state.timer.counting) {
        this.props.dispatch(fetchContributions(this.props.state.timer.start))
      }},
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <ContributionsWrapper>
        <Card>
          <Segment inverted color='green' padded='false'>
            <Image src={GitHubIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
            <Statistic inverted>
              <Statistic.Value>
                {this.props.state.contributions.commits ? this.props.state.contributions.commits : 0}
              </Statistic.Value>
              <Statistic.Label>Contributions</Statistic.Label>
            </Statistic>
          </Segment>
        </Card>
      </ContributionsWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {state: state};
};

export default connect(mapStateToProps)(ContributionContainer);
