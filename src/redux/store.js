import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { DeveloperReducer } from "./DeveloperReducer";

import { UserReducer } from "./UserReducer";
import { FeedReducer } from "./FeedReducer";
import { ResponseReducer } from "./ResponseReducer";
import { AdminReducer } from "./AdminReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  developer: DeveloperReducer,
  feed: FeedReducer,
  response: ResponseReducer,
admin:AdminReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

// HOW TO ACCESS THE STORE IN COMPOENNT
// state.user.authSuccess