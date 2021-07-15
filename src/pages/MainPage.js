import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <div style={{ backgroundImage: "url(10.gif)",
    }} 
      className=" sign-up-bg bg-dark d-flex justify-content-center align-items-center"
  
    >
        <div>
        <h1 className="text-center text-danger font-family font-weight-bold alert  ">WELCOME TO DEVELOPER COMMUNITY APPLICATION</h1>
    <Link to="/user-signin">
      <input
        type="button"
        value="LOGIN AS USER"
        className="btn btn-primary rounded-pill btn-lg float-left w-50"
      />
    </Link>
    <Link to="/admin-page">
      <input
        type="button"
        value="LOGIN AS ADMIN"
        className="btn btn-primary rounded-pill btn-lg float-right w-50"
      />
    </Link>
    <Link to="/user-signup">
              <input
                type="button"
                value="Register Here"
                className="btn btn-lg btn-link w-100"
              />
            </Link>
    </div>
    </div>

    );
}
