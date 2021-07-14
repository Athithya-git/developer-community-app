import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { UserSignIn } from "./pages/UserSignIn";

import { UserSignUp } from "./pages/UserSignUp";
import { DeveloperList } from "./pages/DeveloperList";

import { DeveloperUpsert } from "./pages/DeveloperUpsert";
import { AppNav } from "./pages/AppNav";
import { FeedList } from "./pages/FeedList";
import { FeedUpsert } from "./pages/FeedUpsert";



function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  
  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  if (authSuccessFromStorage !== "1") {
    history.push("/user-signin");
  }
  return (
    <>
      {authSuccessFromStorage === "1" && <AppNav />}

    <Route exact path="/" component={UserSignIn} />
    <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
      <Route exact path="/developer-list" component={DeveloperList} />
      <Route exact path="/developer-upsert" component={DeveloperUpsert} />
      <Route exact path="/feed-upsert" component={FeedUpsert} />
      <Route exact path="/feed-list" component={FeedList} />



    </>
  );
}

export default App;