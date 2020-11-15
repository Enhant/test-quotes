import { combineReducers } from 'redux';
import quotesReducer from './redux/reducer';

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export default rootReducer;
