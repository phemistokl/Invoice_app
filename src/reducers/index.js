import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    FETCH_CUSTOMERS_REQUEST,
    FETCH_CUSTOMERS_SUCCESS
} from '../actions';

const customers = ( state = { isFetching: false, notes: [] }, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customers: action.customers
      };
    default:
      return state
  }
};

export default combineReducers({ customers, routing });
