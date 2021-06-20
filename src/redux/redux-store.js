import { createStore, combineReducers } from "redux";
import profileReducer from "./reducer-profilePages";
import dialogsReducer from "./reducer-messagesPages";
import sideBarReducer from "./reducer-sideBar";
import usersReducer from "./reducer-users";
import authReducer from "./reducer-auth";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPages: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
