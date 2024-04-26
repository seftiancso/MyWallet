import {ActionTypes} from '../constants/action-types';

const initialState = {
  listData: [],
};

export const mainReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_MAIN_DATA:
      return {...state, listData: [...state.listData, payload]};
    case ActionTypes.EDIT_MAIN_DATA:
      return {...state, listData: payload};
    default:
      return state;
  }
};
