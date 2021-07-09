  
import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";

  import thunk from "redux-thunk";
import { DeveloperReducer } from "./DeveloperReducer";

  import { UserReducer } from "./UserReducer";

  const rootReducer = combineReducers({
    user: UserReducer,
    DeveloperReducer: DeveloperReducer,

  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export { store };
  
  // HOW TO ACCESS THE STORE IN COMPOENNT
  // state.user.authSuccess