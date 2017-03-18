import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    FETCH_CUSTOMERS_REQUEST,
    FETCH_CUSTOMERS_SUCCESS,
    CREATE_CUSTOMER,
    EDIT_CUSTOMER,
    TOGGLE_MODAL,
    DISMISS_MODAL
} from '../actions';

const customers = ( state = { isFetching: false, customers: [] }, action) => {
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

const modal = ( state = { isOpen: false, newEntry: false }, action) => {
    switch(action.type) {
      case TOGGLE_MODAL:
        return {
          ...state,
          isOpen: !state.isOpen
        };
      case CREATE_CUSTOMER:
        return {
          ...state,
          newEntry: true
        };
      case EDIT_CUSTOMER:
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
}

export default combineReducers({ customers, modal, routing });
