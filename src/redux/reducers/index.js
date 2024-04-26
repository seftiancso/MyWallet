import {combineReducers} from 'redux';
import {mainReducer} from './MainReducer';

const reducers = combineReducers({
  mainData: mainReducer,
});

export default reducers;
