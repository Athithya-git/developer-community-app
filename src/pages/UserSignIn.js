import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authenticateUserAction } from "../redux/UserReducer";

export const UserSignIn = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");


  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);


  const signInUser = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(authenticateUserAction({ userId, password, role }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  // REACT ROUTE DOM
  if (state.user.authSuccess === true) {
    // redirecting the user /employee-list page;
    // history.push("/employee-list");
    history.push("/developer-list");
  }

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50">
        <h1 className="text-center alert alert-info">Developer Community Sign</h1>

        {state.user.authFailure && (
          <h6 className="text-center alert alert-danger">
            Invalid Credentials
          </h6>
        )}

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="email"
              placeholder="Enter UserId"
              value={userId}
              onChange={updateUserId}
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
              type="text"
              value={role}
              onChange={updateRole}
              placeholder="Enter role"
              className="form-control form-control-lg mb-2"
              required
            />
          </div>

          <div>
            <input
              type="button"
              value="SIGN IN"
              onClick={signInUser}
              className="btn btn-info btn-lg w-100"
            />
          </div>

          <div>
            <Link to="/user-signup">
              <input
                type="button"
                value="Signup Here"
                className="btn btn-lg btn-link w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};