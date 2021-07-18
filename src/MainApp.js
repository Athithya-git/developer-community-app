// import logo from './logo.svg';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   useHistory,
// } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { DeveloperList } from "./pages/DeveloperList";

// import { DeveloperUpsert } from "./pages/DeveloperUpsert";
// import { AppNav } from "./pages/AppNav";
// import { FeedList } from "./pages/FeedList";
// import { FeedUpsert } from "./pages/FeedUpsert";
// import { ResponseList } from "./pages/ResponseList";
// import { ResponseUpsert } from "./pages/ResponseUpsert";





// function MainApp() {
//   const history = useHistory();
//   const state = useSelector((state) => state);

  
//   const authSuccessFromStorage = localStorage.getItem("authSuccess");
//   if (authSuccessFromStorage !== "1") {
//     history.push("/main-page");
//   }
//   return (
//     <>

// {authSuccessFromStorage === "1" && <AppNav />}


//       <Route exact path="/developer-list" component={DeveloperList} />
//       <Route exact path="/developer-upsert" component={DeveloperUpsert} />
//       <Route exact path="/feed-upsert" component={FeedUpsert} />
//       <Route exact path="/feed-list" component={FeedList} />
//       <Route exact path="/response-upsert" component={ResponseUpsert} />
//       <Route exact path="/response-list" component={ResponseList} />


//     </>
//   );
// }

// export default MainApp;