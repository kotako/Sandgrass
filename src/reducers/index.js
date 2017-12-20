import { combineReducers } from 'redux';
import timer from './timer';
import contributions from './contributions';

const sandglass = combineReducers({
  timer,
  contributions
})

export default sandglass;
