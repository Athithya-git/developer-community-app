import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteAdminResponseAction,
  getAllAdminResponseAction,
} from "../redux/AdminReducer";

export const AdminResponseList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllAdminResponseAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.respId);
    //dispatch the call.
    dispatch(deleteAdminResponseAction(item));
  };

 
  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3>RESPONSE LIST</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th scope="col">
              <div className="mr-3">RESPONSE ID </div>
            </th>
            <th scope="col">ANSWER</th>
            <th scope="col">RESPONSE DATE</th>
            <th scope="col">RESPONSE TIME</th>
            <th scope="col">ACCURACY</th>
            <th scope="col">LIKES</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.response.responseList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.respId}</th>
              <td>{item.answer}</td>
              <td>{item.respDate}</td>
              <td>{item.respTime}</td>
              <td>{item.accuracy}</td>
              <td>{item.likes}</td>
               {/* <td>{state.counter}</td> */}
              <td>
                {/**Step1-update */}
                
                <input
                  type="button"
                  value="DELETE 🗑️"
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-outline-danger btn-sm ml-1 "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};