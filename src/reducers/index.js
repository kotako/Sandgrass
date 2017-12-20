import { combineReducers } from 'redux';
import timer from './timer';
import contributions from './contributions';
import tweets from './tweets';

const sandglass = combineReducers({
  timer,
  contributions,
  tweets
})

export default sandglass;
