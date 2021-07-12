import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCreateAction } from "../redux/UserReducer";

export const UserSignUp = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
 

  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);
  

  const signUpHere = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(userCreateAction({ userId, password, role }));

      // clear the form
      setUserId("");
      setPassword("");
      setRole("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div style={{ backgroundImage: "url(1.jpeg)", width:"100vwh",height: "100vh" ,flex: "1",
    justifyContent: 'center',
    alignItems: 'center',
    }}
      className="bg-dark d-flex justify-content-center align-items-center"
      
    >
      <div className="w-50">
        <h2 className="text-center alert alert-info">
          Developer Community Register Here
        </h2>

        {state.user.progress && (
          <h6 className="text-center alert alert-success">
            Registeratio Success!!
          </h6>
        )}

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="email"
              value={userId}
              onChange={updateUserId}
              placeholder="Enter UserId"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={updatePassword}
              placeholder="Enter Password"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={role}
              onChange={updateRole}
              placeholder="Enter Role"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          

          <div>
            <input
              type="button"
              onClick={signUpHere}
              value="Register Here"
              className="btn btn-info btn-lg w-100"
            />
          </div>

          <div>
            <Link to="/user-signin">
              <input
                type="button"
                value="Signin Here"
                className="btn btn-link w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};