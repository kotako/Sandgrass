import Moment from 'moment';

const analyzer = (state ={}, action) => {
  switch (action.type) {
    case 'INIT':
      return {...state, leftDataKey: 'working_time', rightDataKey: 'commits', threshold: 86400, border: Moment().day(-6).startOf('date').unix(), format: 'MM/DD' };
    default:
      return state;
  }
};

export default analyzer;
