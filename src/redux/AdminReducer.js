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
    const url = `http://localhost:8080/api/v1/developers`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "DEVELOPER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};
export const deleteAdminDeveloperAction = (payload) => {
  return async (dispatch) => {
    //MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/v1/admin/delete/${payload.devId}`;
    await axios.delete(url);

    //UPDATE THE UI TODO :: Fetch the updated list
    dispatch(getAllAdminDeveloperAction());
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
      default:
        return state;
    }
  }