import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    
  getAllAdminDeveloperAction,
  deleteAdminDeveloperAction,

} from "../redux/AdminReducer";



export const AdminPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllAdminDeveloperAction());
  }, []);

  

  // 2
  const deleteRecord1 = (item) => {
    console.log("DELETE RECORD", item.devId);
    //dispatch the call.
    dispatch(deleteAdminDeveloperAction(item));
  };

    



  return (
    
    <div>
        <h1>ADMIN PAGE</h1>
      <div className="alert alert-secondary mb-0">
        <h3> DEVELOPER LIST</h3>
      </div>
      
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">DEVELOPER ID</th>
            <th scope="col">NAME</th>
            <th scope="col">USER ID</th>
            <th scope="col">MEMBER SINCE</th>
            <th scope = "col">SKILL LEVEL</th>
            <th scope = "col">REPUTATION</th>
            <th scope = "col">TOTAL FEEDS</th>
            <th scope = "col">IS VERIFIED</th>
            <th scope = "col">IS BLOCK</th>
            <th scope = "col">ACTIONS</th>

            
          </tr>
        </thead>
        <tbody>
          {state.developer.developerList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.devId}</th>
              <td>{item.name}</td>
              <td>{item.users.userId}</td>
              <td>{item.memberSince}</td>
              <td>{item.skillLevel}</td>
              <td>{item.reputation}</td>
              <td>{item.totalFeeds}</td>
              <td>{item.isVerified?"true":"false"}</td>
              <td>{item.isBlock?"true":"false"}</td>

              <td>
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-outline-secondary btn-sm  mr-1"

                  onClick={() =>deleteRecord1(item)}
                />
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};