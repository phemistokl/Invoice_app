import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    GET_ALL_CUSTOMERS,
    DELETE_CUSTOMER,
    CREATE_CUSTOMER,
    SET_CURRENT_CUSTOMER,

    GET_ALL_PRODUCTS,
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    SET_CURRENT_PRODUCT,

    GET_ALL_INVOICES,
    DELETE_INVOICE,
    CREATE_INVOICE,
    SET_CURRENT_INVOICE,

    OPEN_MODAL,
    TOGGLE_MODAL
} from '../actions';

const customers = ( state = { customers: [], customer: [] }, action) => {
  switch (action.type) {
    case DELETE_CUSTOMER:
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.customers
      };
    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        customer: action.customer
      };
    default:
      return state
  }
};

const products = ( state = { products: [], product: [] }, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        product: action.product
      };
    default:
      return state
  }
};

const invoices = ( state = { invoices: [], invoice: [] }, action) => {
  switch (action.type) {
    case DELETE_INVOICE:
    case GET_ALL_INVOICES:
      return {
        ...state,
        invoices: action.invoices
      };
    case SET_CURRENT_INVOICE:
      return {
        ...state,
        invoice: action.invoice
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
      case CREATE_INVOICE:
      case CREATE_PRODUCT:
      case CREATE_CUSTOMER:
        return {
          ...state,
          newEntry: true
        };
      case SET_CURRENT_INVOICE:
      case SET_CURRENT_PRODUCT:
      case SET_CURRENT_CUSTOMER:
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
}

export default combineReducers({ customers, products, invoices, modal, routing });
