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
import { AddDeveloperList } from "./pages/AddDeveloperList";




function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  
  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  if (authSuccessFromStorage !== "1") {
    history.push("/user-signin");
  }
  return (
    <>

    <Route exact path="/" component={UserSignIn} />
    <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
      <Route exact path="/developer-list" component={DeveloperList} />
      <Route exact path="/add-developer-list" component={AddDeveloperList} />


    </>
  );
}

export default App;
