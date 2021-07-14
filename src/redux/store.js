import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { DeveloperReducer } from "./DeveloperReducer";

import { UserReducer } from "./UserReducer";
import { FeedReducer } from "./FeedReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  developer: DeveloperReducer,
  feed: FeedReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

// HOW TO ACCESS THE STORE IN COMPOENNT
// state.user.authSuccess