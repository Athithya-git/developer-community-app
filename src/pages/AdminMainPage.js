import { Link } from "react-router-dom";

export const AdminMainPage = () => {
    return (
        <div style={{ backgroundImage: "url(11.png)",
    }} 
      className=" sign-up-bg bg-dark d-flex justify-content-center align-items-center"
  
    >
        <div>
        <h1 className="text-center text-light font-family font-weight-bold alert  ">WELCOME TO ADMIN MAIN PAGE</h1>

    <Link to="/admin-page">
      <input
        type="button"
        value="DEVELOPER LIST"
        className="btn mr-3 mb-3  btn-outline-light rounded-pill btn-lg float-left w-25"
      />
    </Link>
    

    <Link to="/admin-feed-list">
      <input
        type="button"
        value="FEED LIST"
        className="btn  mr-3 mb-3 btn-outline-light rounded-pill btn-lg float-right w-25"
      />
    </Link>
    <Link to="/admin-response-list">
              <input
                type="button"
                value="RESPONSE LIST"
                className="btn mx-auto btn-outline-light rounded-pill btn-lg  w-100 "
                />
            </Link>
            </div>
    </div>

    );
    
}