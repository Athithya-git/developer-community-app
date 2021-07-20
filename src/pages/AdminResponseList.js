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
    <div style={{ backgroundImage: "url(66.jpg)",
  }} 
    className=" sign-up-bg"

  >
    <div>
      <div className="alert alert-secondary mb-0">
        <h3> ⭐RESPONSE LIST ⭐</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th  class="bg-info" scope="col">
              <div className="mr-3">RESPONSE ID </div>
            </th>
            <th  class="bg-info" scope="col">ANSWER</th>
            <th  class="bg-info" scope="col">RESPONSE DATE TIME</th>
            <th  class="bg-info" scope="col">ACCURACY</th>
            <th  class="bg-info" scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.response.responseList.map((item, index) => (
            <tr key={index}>
              <th  class="bg-info" scope="row">{item.respId}</th>
              <td  class="bg-info">{item.answer}</td>
              <td  class="bg-info">{item.respDateTime}</td>
              <td  class="bg-info">{item.accuracy}</td>
               {/* <td>{state.counter}</td> */}
              <td  class="bg-info">
                {/**Step1-update */}
                
                <input
                  type="button"
                  value="DELETE 🗑️"
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-danger btn-sm ml-1 "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};