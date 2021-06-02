import { createStore, combineReducers } from "redux";
import profileReducer from "./reducer-profilePages";
import dialogsReducer from "./reducer-messagesPages";
import sideBarReducer from "./reducer-sideBar";
import usersReducer from "./reducer-users";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPages: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
