import axios from "axios";

const initState = {
  developerList: [],
  progress: false,

  // AUTH FAILS => TRUE
  authFailure: false,
  authSuccess: false, // store this informatino in session/localstorage
};

// ACTION TYPES :: :: ENITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";
const ADMIN_DEVELOPER_GET_ALL_ACTION_TYPE = "ADMIN_DEVELOPER_GET_ALL_ACTION_TYPE";
const ADMIN_DEVELOPER_DELETE_ACTION_TYPE = "ADMIN_DEVELOPER_DELETE_ACTION_TYPE";
const ADMIN_FEED_GET_ALL_ACTION_TYPE = "ADMIN_FEED_GET_ALL_ACTION_TYPE";

const ADMIN_FEED_DELETE_ACTION_TYPE = "ADMIN_FEED_DELETE_ACTION_TYPE";
const ADMIN_RESPONSE_GET_ALL_ACTION_TYPE = "ADMIN_RESPONSE_GET_ALL_ACTION_TYPE";

const ADMIN_RESPONSE_DELETE_ACTION_TYPE = "ADMIN_RESPONSE_DELETE_ACTION_TYPE";


export const authenticateAdminAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: VERIFICATION
    const url = `http://localhost:8080/api/admin/login`;
    const response = await axios.post(url, payload);

    if (response.data !== "") {
      // VALID USER
      // updat the UI:: THIS IS TRICKY
      dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });

      // Will store the success information in storage.
      // TODO will save into the storage
      localStorage.setItem("authSuccess", "1");

      // NOT DOING THE ACTIVITY OF 5 SECONDS :: page will be redirected to anohter page.
    } else {
      // INVALID USER :: AUTH FAILS
      // updat the UI:: THIS IS TRICKY
      dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });

      setTimeout(() => {
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
      }, 5000);
    }
  };
};

// ACTIONS
export const getAllAdminDeveloperAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/admin/developers`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "DEVELOPER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};
export const deleteAdminDeveloperAction = (payload) => {
  return async (dispatch) => {
    //MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/admin/devId/${payload.devId}`;
    await axios.delete(url);

    //UPDATE THE UI TODO :: Fetch the updated list
    dispatch(getAllAdminDeveloperAction());
  };
};
export const getAllAdminFeedAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/admin/feeds`;
    const response = await axios.get(url);

    console.log(response);

    // UI UPDATE
    dispatch({ type: "ADMIN_FEED_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const deleteAdminFeedAction = (payload) => {
  return async (dispatch) => {
    //MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/admin/delete/${payload.id}`;
    await axios.delete(url);

    //UPDATE THE UI TODO :: Fetch the updated list
    dispatch(getAllAdminFeedAction());
  };
};

// ACTIONS
export const getAllAdminResponseAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/admin/responses`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "ADMIN_RESPONSE_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};
export const deleteAdminResponseAction = (payload) => {
  return async (dispatch) => {
    // MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/admin/responses/respId/${payload.respId}`;
    await axios.delete(url);

    // Upate the UI TODO :: Fetch The Updated List
    dispatch(getAllAdminResponseAction());
  };
};
// REDURE FOR STATE UPDTE
export function AdminReducer(state = initState, action) {
    switch (action.type) {
      case PROGRESS_ACTION_TYPE:
        return { ...state, progress: action.payload };
      case AUTH_FAILURE_ACTION_TYPE:
        return { ...state, authFailure: action.payload };
      case AUTH_SUCCESS_ACTION_TYPE:
        return { ...state, authSuccess: action.payload };
        case ADMIN_DEVELOPER_GET_ALL_ACTION_TYPE:
      return { ...state, developerList: action.payload };
      case ADMIN_FEED_GET_ALL_ACTION_TYPE:
      return { ...state, feedList: action.payload };
      case ADMIN_RESPONSE_GET_ALL_ACTION_TYPE:
      return { ...state, responseList: action.payload };
      default:
        return state;
    }
  }