import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./reducer-profilePages";
import dialogsReducer from "./reducer-messagesPages";
import sideBarReducer from "./reducer-sideBar";
import usersReducer from "./reducer-users";
import authReducer from "./reducer-auth";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPages: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
