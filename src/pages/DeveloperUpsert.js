import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDeveloperAction,
  updateDeveloperAction,
} from "../redux/DeveloperReducer";
//import { AppNav } from "./AppNav";

export const DeveloperUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const formEl = useRef();

  const [name, setName] = useState(state.developer?.uref?.name);
  const [userId, setUserId] = useState(state.developer?.uref?.userId);
  const [skillLevel, setSkillLevel] = useState(state.developer?.uref?.skillLevel);
  const [memberSince, setMemberSince] = useState(state.developer?.uref?.memberSince);

  const updateName = (e) => setName(e.target.value);
  const updateUserId = (e) => setUserId(e.target.value);
  const updateSkillLevel = (e) => setSkillLevel(e.target.value);
  const updateMemberSince= (e) => setMemberSince(e.target.value);
  

  const addNewDeveloper = (e) => {
    // WRITE LOGIC FOR THE VALIDATION :: FORM_ELEMENT / FORM_TAG
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        createDeveloperAction({
          name,
          userId,
          skillLevel,
          memberSince,
        })
      );

      // clear the form
      setName("");
      setUserId("");
      setSkillLevel("");
      setMemberSince("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  const updateDeveloper = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        updateDeveloperAction({
          id: state.developer.uref.id,
          name,
          userId,
          skillLevel,
          memberSince,
        })
      );

      // clear the form
      setName("");
      setUserId("");
      setSkillLevel("");
      setMemberSince("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div>
      <div className="alert alert-secondary">
        {state.developer?.uref?.id ? (
          <h5>Developer Update</h5>
        ) : (
          <h5>Developer Create</h5>
        )}
      </div>

      {state.developer?.progress && (
        <div className="mx-4 alert alert-success">Operation Success</div>
      )}

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="text"
            value={name}
            onChange={updateName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter  Name"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="email"
            value={userId}
            onChange={updateUserId}
            className="form-control form-control-lg mb-1"
            placeholder="Enter  userId"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={skillLevel}
            onChange={updateSkillLevel}
            className="form-control form-control-lg mb-1"
            placeholder="Enter skill level"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="date"
            value={memberSince}
            onChange={updateMemberSince}
            className="form-control form-control-lg mb-1"
            placeholder="Enter member since"
            minLength="6"
            maxLength="30"
            required
          />
        </div>


        <div>
          {state.developer?.uref?.id ? (
            <input
              type="button"
              onClick={updateDeveloper}
              value="Update Developer"
              className="btn btn-lg btn-secondary w-100"
            />
          ) : (
            <input
              type="button"
              onClick={addNewDeveloper}
              value="Add Developer"
              className="btn btn-lg btn-secondary w-100"
            />
          )}
        </div>
      </form>
    </div>
  );
};