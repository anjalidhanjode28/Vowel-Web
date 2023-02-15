import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
//import { reducer as AppReducer } from "./AppReducer/reducer";
import { authReducer as AuthReducer } from "./Auth/reducer";
import thunk from "redux-thunk";

//const rootReducer = combineReducers({ AppReducer, AuthReducer });
const rootReducer = combineReducers({ AuthReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };