import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <div style={{ backgroundImage: "url(10.gif)",
    }} 
      className=" sign-up-bg bg-dark d-flex justify-content-center align-items-center"
  
    >
        <div>
        <h1 className="text-center text-light font-family font-weight-bold alert  ">WELCOME TO DEVELOPER COMMUNITY APPLICATION</h1>

    <Link to="/user-signin">
      <input
        type="button"
        value="LOGIN AS USER"
        className="btn mr-3 mb-3  btn-outline-light rounded-pill btn-lg float-left w-25"
      />
    </Link>
    

    <Link to="/admin-signin">
      <input
        type="button"
        value="LOGIN AS ADMIN"
        className="btn  mr-3 mb-3 btn-outline-light rounded-pill btn-lg float-right w-25"
      />
    </Link>
    <Link to="/user-signup">
              <input
                type="button"
                value="Register Here"
                className="btn mx-auto btn-outline-warning rounded-pill btn-lg  w-100 "
                />
            </Link>
            </div>
    </div>

    );
}
