import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Moment from 'moment';
import { Card, Statistic } from 'semantic-ui-react';
import MixChart from '../components/MixChart';

const Wrapper = styled.div`
  display: flex;
  vertical-align: middle;
`

class AnalyzerCardContainer extends React.Component {
  render() {
    return (
      <Card fluid style={{minWidth: "600px"}}>
        <Card.Content>
          <Card.Header>
            Weekly Charts
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Wrapper>
            {MixChart(this.props)}
            <div>
            <Statistic size='small' style={{display: window.screen.width<768 ? 'none' : 'visible'}}>
              <Statistic.Value>
                {this.props.data ? Math.round((this.props.data.reduce((sum, data) => sum+data.commits, 0)/7)) : 0}
              </Statistic.Value>
              <Statistic.Label>commit / day</Statistic.Label>
            </Statistic>
            <br/>
            <Statistic size='small' style={{display: window.screen.width<768 ? 'none' : 'visible'}}>
              <Statistic.Value>
                {this.props.data ? Moment.unix(Math.round((this.props.data.reduce((sum, data) => sum+data.working_time_min*60, 0)))/this.props.data.length-32400).format('HH:mm') : '00:00'}
              </Statistic.Value>
              <Statistic.Label>work / day</Statistic.Label>
            </Statistic>
            </div>
          </Wrapper>
        </Card.Content>
      </Card>
    )
  }
}

const createFlipsArray = (flips, border, threshold, format) => {
  let result = [];
  for (let i = border; i < Moment().unix(); i+=threshold) {
    result.push({ key: Moment.unix(i).format(format), commits: 0, working_time_min: 0, flips: 0 });
  }

  Object.keys(flips).forEach((key, index, array) => {
    const flip = flips[key];

    if (flip.started_at > border) {
      result[Math.ceil((flip.started_at - border) / threshold) - 1].commits += flip.commits;
      result[Math.ceil((flip.started_at - border) / threshold) - 1].working_time_min += Math.round(flip.working_time / 60);
      result[Math.ceil((flip.started_at - border) / threshold) - 1].flips++;
    }
  })
  return result;
}

const mapStateToProps = state => {
  return {
    w: window.screen.width < 768 ? 320 : 480,
    h: 200,
    data: state.user.flips ? createFlipsArray(state.user.flips, state.analyzer.border, state.analyzer.threshold, state.analyzer.format) : null,
    dataKey: 'key',
    leftDataKey: state.analyzer.leftDataKey,
    rightDataKey: state.analyzer.rightDataKey,
    leftColor: '#f39c12',
    rightColor: '#30Cb30'
  }
}

export default connect(mapStateToProps)(AnalyzerCardContainer);
