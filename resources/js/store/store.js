import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser/currentUser";
import posts from "./reducers/posts/posts";

const reducers = combineReducers({
  currentUser,
  posts
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store