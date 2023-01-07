import {combineReducers, legacy_createStore } from "redux";
import profilePageReducer from "./ProfilePageReducer";
import dialogsPageReducer from "./DialogsPageReducer";
import sideBarReducer from "./SideBarReducer";


let reducers = combineReducers({
   'profilePage': profilePageReducer,
    'dialogsPage': dialogsPageReducer,
    'sideBar': sideBarReducer,
});
let store = legacy_createStore(reducers);


export default store;