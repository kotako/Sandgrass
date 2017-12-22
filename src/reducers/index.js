import { combineReducers } from 'redux';
import timer from './timer';
import contributions from './contributions';
import tweets from './tweets';
import qiitaCard from './qiitaCard';

const sandglass = combineReducers({
  timer,
  contributions,
  tweets,
  qiitaCard
})

export default sandglass;
