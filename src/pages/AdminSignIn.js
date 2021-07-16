import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authenticateAdminAction } from "../redux/AdminReducer";


export const AdminSignIn = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");


  const updateAdminId = (e) => setAdminId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  


  const signInAdmin = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(authenticateAdminAction({ adminId, password }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  // REACT ROUTE DOM
  if (state.admin.authSuccess === true) {
    // redirecting the user /developer-list page;
    history.push("/admin-page");
  }

  return (
    <div style={{ backgroundImage: "url(3.jpeg)",
  }} 
    className=" sign-up-bg bg-dark d-flex justify-content-center align-items-center"

  >
    <div className="w-50">
      <h1 className="text-center alert alert-warning ">🔑 DEVELOPER COMMUNITY ADMIN SIGNIN 🔑</h1>

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="email"
              placeholder="Enter Admin Id"
              value={adminId}
              onChange={updateAdminId}
              className="form-control form-control-lg mb-2"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={updatePassword}
              placeholder="Enter Password"
              className="form-control form-control-lg mb-2"
              required
            />
          </div>
         

          <div>
            <input
              type="button"
              value=" ADMIN SIGN IN"
              onClick={signInAdmin}
              className="btn btn-info btn-lg w-100"
            />
          </div>

          <div>
          
            <Link to="/main-page">
      <input
        type="button"
        value="GO TO MAIN PAGE"
        className="btn  btn-link w-100"
      />
    </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
