import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createResponseAction, updateResponseAction } from "../redux/ResponseReducer";

export const ResponseUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const formEl = useRef();
  //const [id, setId] = useState(state.response.uref.id);
  //const [devId, setDevId] = useState(state.response.uref.devId);

  const [answer, setAnswer] = useState(state.response.uref.answer);
  const [respDateTime, setRespDateTime] = useState(state.response.uref.respDateTime);
  const [accuracy, setAccuracy] = useState(state.response.uref.accuracy);

  //const updateId = (e) => setId(e.target.value);
  //const updateDevId = (e) => setDevId(e.target.value);

  const updateAnswer = (e) => setAnswer(e.target.value);
  const updateRespDateTime = (e) => setRespDateTime(e.target.value);
  const updateAccuracy = (e) => setAccuracy(e.target.value);
  // const updateAccuracy = (e) => {
  //   console.log(e.target.value);

  //   //REPLACING ALL THE NON-DIGIT ^\\d WITH EMPTY STRING
  //   const numericValue = e.target.value.replace(/[^\d]/gi, "");
  //   setRelevance(numericValue);
  // };

  // const updateTotalComments = (e) => {
  //   console.log(e.target.value);

  //   //REPLACING ALL THE NON-DIGIT ^\\d WITH EMPTY STRING
  //   const numericValue = e.target.value.replace(/[^\d]/gi, "");
  //   setTotalComments(numericValue);
  // };

  const addNewResponse = (e) => {
    //WRITE LOGIC FOR THE VALIDATION :: FORM_ELEMENT / FORM_TAG
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        createResponseAction({
         
         answer,
         respDateTime,
         accuracy,
        })
      );

      // clear the form
      setAnswer("");
      setRespDateTime("");
      setAccuracy("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  const updateResponse = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        updateResponseAction({
          respId: state.response.uref.respId,
          answer,
          respDateTime,
          accuracy,
        })
      );

      // clear the form
      setAnswer("");
      setRespDateTime("");
      setAccuracy("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };
  return (
    <div style={{ backgroundImage: "url(66.jpg)",
  }} 
    className=" sign-up-bg"

  >
    <div>
      <div className="alert alert-secondary">
        {state.response.uref.respId ? (<h5> 🌟 RESPONSE UPDATE 🌟</h5>) : (<h5> 🌟 RESPONSE CREATE 🌟</h5>)}
      </div>

      {state.response.progress && (
        <div className="mx-4 alert alert-success">Operation Success</div>
      )}

      <form ref={formEl} className="mx-4 needs-validation " noValidate>
      
      <div>
          <input
            type="text"
            value={answer}
            onChange={updateAnswer}
            className="form-control form-control-lg mb-1"
            placeholder="Enter the answer"
            minLength="5"
            maxLength="100"
            required
          />
          <div class="invalid-feedback">
      Please provide a valid answer.
    </div>
    <div class="valid-feedback">
      Looks good!
    </div>
        </div>

        <div>
          <input
            type="date"
            value={respDateTime}
            onChange={updateRespDateTime}
            className="form-control form-control-lg mb-1"
            placeholder="Select the Response Date Time"
            // minLength="3"
            // maxLength="30"
            required
            required
          />
          <div class="invalid-feedback">
      Please provide a valid date time.
    </div>
    <div class="valid-feedback">
      Looks good!
    </div>
        </div>

        


        <div>
          <input
            type="text"
            value={accuracy}
            onChange={updateAccuracy}
            className="form-control form-control-lg mb-1"
            placeholder="Enter the Accuracy percentage"
            // minLength="6"
            maxLength="3"
            required
          />
          <div class="invalid-feedback">
      Please provide a valid accuracy.
    </div>
    <div class="valid-feedback">
      Looks good!
    </div>
        </div>

        


        <div>
          {state.response.uref.respId ? (
            <input
              type="button"
              onClick={updateResponse}
              value="Update Response"
              className="btn btn-lg btn-info w-100"
            />
          ) : (
            <input
              type="button"
              onClick={addNewResponse}
              value="Add Response"
              className="btn btn-lg btn-info w-100"
            />
          )}
        </div>
      </form>
    </div>
    </div>
  );
};