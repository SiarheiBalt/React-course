
import { createStore, combineReducers } from "redux";
import profileReducer from "./reducer-profilePages";
import dialogsReducer from "./reducer-messagesPages";
import sideBarReducer from "./reducer-sideBar";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPages: dialogsReducer,
    sideBar: sideBarReducer,
});

let store = createStore(reducers);

export default store;