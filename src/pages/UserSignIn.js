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


  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  


  const signInUser = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(authenticateUserAction({ userId, password }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  // REACT ROUTE DOM
  if (state.user.authSuccess === true) {
    // redirecting the user /developer-list page;
    history.push("/developer-list");
  }

  return (
    <div style={{ backgroundImage: "url(3.jpeg)",
  }} 
    className=" sign-up-bg bg-dark d-flex justify-content-center align-items-center"

  >
    
    <div className="w-50">
      <h1 className="text-center alert alert-warning ">🔑 Developer Community Sign  🔑</h1>
      {state.user.progress && (
        <div className="mx-4 alert alert-success">Operation Success</div>
      )}
      <form class="form-horizontal" ref={formEl} className="needs-validation" noValidate>
      <div>
   {
      state.user.authFailure===true && (<h5> Invalid Crendentials</h5>)
    }
   </div>  
<div>
            <input
              type="email"
              placeholder="Enter UserId"
              value={userId}
              onChange={updateUserId}
              className="form-control form-control-lg mb-2"
              required
            />
            <div class="invalid-feedback">
      Please provide a valid user Id.
    </div>
    <div class="valid-feedback">
      Looks good!
    </div>
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
              <div class="valid-feedback">
      Looks good!
    </div>
    <div class="invalid-feedback">
      Please provide a valid password.
    </div>
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
