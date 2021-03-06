import Moment from 'moment';

const analyzer = (state ={}, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        leftDataKey: 'working_time_min',
        rightDataKey: 'commits',
        threshold: 86400,
        border: Moment().startOf('date').unix() - 518400,
        format: 'MM/DD'
      };
    case 'RIGHT_CHART_CHANGED':
      return {
        ...state,
        rightDataKey: action.rightDataKey
      };
    case 'LEFT_CHART_CHANGED':
      return {
        ...state,
        leftDataKey: action.leftDataKey
      };
    case 'BORDER_CHANGED':
      return {
        ...state,
        border: action.border
      }
    case 'THRESHOLD_CHANGED':
      return {
        ...state,
        threshold: action.threshold
      }
    default:
      return state;
  }
};

export default analyzer;
