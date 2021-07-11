import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    deleteDeveloperAction,
  getAllDeveloperAction,
  updateRenderAction,
} from "../redux/DeveloperReducer";
import { AppNav } from "./AppNav";


export const DeveloperList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDeveloperAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.id);
    // dispatch the call.
    dispatch(deleteDeveloperAction(item));
  };

  // 2
  const updateRecord = (item) => {
    console.log("Update Record", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigating to the page
    history.push("/developer-upsert");
  };

  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3> Developer List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">userId</th>
            <th scope="col">memberSince</th>
            
          </tr>
        </thead>
        <tbody>
          {state.developer?.developerList ?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.userId}</td>
              <td>{item.memberSince}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-secondary btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  onClick={() => updateRecord(item)}
                />
                <input
                  type="button"
                  value="Delete"
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-outline-danger btn-sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};