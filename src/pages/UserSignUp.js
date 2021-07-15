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
 

  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  

  const signUpHere = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(userCreateAction({ userId, password}));

      // clear the form
      setUserId("");
      setPassword("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div style={{backgroundImage:"url(8.gif)" }}
   className="sign-up-bg d-flex justify-content-center align-items-center " >
 
      
      <div className="w-50">
  
        <h2 className="sign-in-bg text-center alert alert-dark">
        📃  Developer Community Register Here  📃
        </h2>
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
                value="SIGN IN HERE"
                className="btn btn-link btn-lg w-100"
              />
            </Link>
            <Link to="/main-page">
      <input
        type="button"
        value="GO TO MAIN PAGE"
        className="btn  btn-lg btn-link w-100"
      />
    </Link>
          </div>
        </form>
      </div>
    </div>
  );
};