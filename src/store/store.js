import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

import { authReducer } from "./auth/auth.reducer";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools());
