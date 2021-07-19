import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/DeveloperReducer";
import { signOutAction } from "../redux/UserReducer";
import { updateRenderAction1 } from "../redux/FeedReducer";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  const clearDeveloperURef = () => {
    dispatch(updateRenderAction({}));    
    history.push("/developer-upsert");
  };
  const clearFeedUref1 = () => {
    dispatch(updateRenderAction1({}));
    history.push("/feed-upsert");
  };
  const clearResponseUref = () => {
    dispatch(updateRenderAction({}));
    history.push("/response-upsert");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"> 🔰 DEVELOPER COMMUNITY APP 🔰</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/feed-response-page" className="  text-light"
>
            FEED RESPONSE PAGE
          </Nav.Link>
          <Nav.Link as={Link} to="/developer-list"className="  text-light"
>
            DEVELOPER LIST
          </Nav.Link>
          <Nav.Link onClick={clearDeveloperURef} className="  text-light"
>ADD DEVELOPER</Nav.Link>
        </Nav>
        <Nav.Link as={Link} to="/feed-list" className="  text-light"
>
            FEED LIST
          </Nav.Link>
          <Nav.Link onClick={clearFeedUref1} className="  text-light"
>ADD FEED</Nav.Link>
          <Nav.Link
            as={Link}
            to="/response-list"
            className="  text-light"
          >
            RESPONSE LIST
          </Nav.Link>
          <Nav.Link
            onClick={clearResponseUref}
            className="text-light"
          >
            ADD RESPONSE
          </Nav.Link> 
          <Nav.Link onClick={signOut}>SIGN OUT</Nav.Link>

      </Navbar.Collapse>
    </Navbar>
  );
};