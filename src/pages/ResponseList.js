import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteResponseAction,
  getAllResponseAction,
  updateRenderAction2,
} from "../redux/ResponseReducer";

export const ResponseList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllResponseAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.respId);
    //dispatch the call.
    dispatch(deleteResponseAction(item));
  };

  // Step2-update
  const updateRecord = (item) => {
    console.log("UPDATE RECORD", item);

    // Step3-updating the store
    dispatch(updateRenderAction2(item));

    //navigating to the page
    history.push("/response-upsert");
  };

  return (
    <div style={{ backgroundImage: "url(14.png)",
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
          <th  class="bg-info" scope="col">RESPONSE ID</th>

             
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
               
              <td  class="bg-info">
            
                <input
                  type="button"
                  value="UPDATE ✍️"
                  className="btn btn-success btn-sm mr-1"
                  onClick={() => updateRecord(item)}
                />
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