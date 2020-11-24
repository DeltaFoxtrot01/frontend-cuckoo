import StandardReducer from "standard/reducer/StandardReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/**
 * this is the store used by redux
 * add any store that may be necessary
 */

/**
 * Empty middleware. Edit as necessary 
 */
const normalMiddleware = (store) => (next) => (action) => {
  next(action);
}

export default createStore(
  combineReducers({
    standard: StandardReducer
  }), {}, applyMiddleware(normalMiddleware, thunk)
);
