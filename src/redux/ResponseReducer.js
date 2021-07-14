import axios from "axios";

const initState = {
  responseList: [],
  progress: false,
  uref: {},
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const Response_GET_ALL_ACTION_TYPE = "Response_GET_ALL_ACTION_TYPE";
const Response_UPDATE_RENDER_ACTION_TYPE = "Response_UPDATE_RENDER_ACTION_TYPE";

// ACTIONS
export const getAllResponseAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/v1/responses`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "Response_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const createResponseAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/api/v1/responses`;
    await axios.post(url, payload);

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const updateResponseAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/api/v1/responses/${payload.respId}`;
    await axios.put(url, payload);

    // making the uref empty again.
    updateRenderAction2({});

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};
export const deleteResponseAction = (payload) => {
  return async (dispatch) => {
    // MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/v1/responses/respId/${payload.respId}`;
    await axios.delete(url);

    // Upate the UI TODO :: Fetch The Updated List
    dispatch(getAllResponseAction());
  };
};
export const updateRenderAction2 = (payload) => {
  // ONLY UPDATEING THE UI
  // 5
  return { type: Response_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};
// REDURE FOR STATE UPDTE
export function ResponseReducer(state = initState, action) {
  switch (action.type) {
    case Response_GET_ALL_ACTION_TYPE:
      return { ...state, responseList: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
      case Response_UPDATE_RENDER_ACTION_TYPE:
        return { ...state, uref: action.payload };
    default:
      return state;
  }
}