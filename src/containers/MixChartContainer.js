import { connect } from 'react-redux';
import Moment from 'moment';
import MixChart from '../components/MixChart';

const createFlipsArray = (flips, border, threshold, format) => {
  let result = [];
  for (let i = border; i < Moment().unix(); i+=threshold) {
    result.push({ key: Moment.unix(i).format(format), commits: 0, working_time: 0, flips: 0 });
  }

  Object.keys(flips).forEach((key, index, array) => {
    const flip = flips[key];

    if (flip.started_at > border) {
      result[Math.ceil((flip.started_at - border) / threshold) - 1].commits += flip.commits;
      result[Math.ceil((flip.started_at - border) / threshold) - 1].working_time += flip.working_time;
      result[Math.ceil((flip.started_at - border) / threshold) - 1].flips++;
    }
  })
  return result;
}

const mapStateToProps = state => {
  return {
    w: 450,
    h: 200,
    data: state.user.flips ? createFlipsArray(state.user.flips, state.analyzer.border, state.analyzer.threshold, state.analyzer.format) : null,
    dataKey: 'key',
    leftDataKey: state.analyzer.leftDataKey,
    rightDataKey: state.analyzer.rightDataKey,
    leftColor: '#f39c12',
    rightColor: '#30Cb30'
  }
}

export default connect(mapStateToProps)(MixChart);
