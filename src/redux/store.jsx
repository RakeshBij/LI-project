// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import formReducer from "./reducers";
import stepReducer from "./stepReducer";

const rootReducer = combineReducers({
  form: formReducer,
  step: stepReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
