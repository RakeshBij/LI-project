// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import formReducer from "./reducers";

const rootReducer = combineReducers({
  form: formReducer,
  // other reducers...
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
