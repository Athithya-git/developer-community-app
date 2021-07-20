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
    <div style={{ backgroundImage: "url(14.png)",
  }} 
    className=" sign-up-bg"

  >
    <div>
        <h1> ♦️ ADMIN PAGE ♦️</h1>
      <div className="alert alert-secondary mb-0">
        <h3> ⭐DEVELOPER LIST ⭐</h3>
      </div>
      
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th  class="bg-info">DEVELOPER ID</th>
            <th class="bg-info">NAME</th>
            <th  class="bg-info">USER ID</th>
            <th  class="bg-info">MEMBER SINCE</th>
            <th  class="bg-info">SKILL LEVEL</th>
            <th  class="bg-info">REPUTATION</th>
            <th class="bg-info">ACTIONS</th>

            
          </tr>
        </thead>
        <tbody>
          {state.developer.developerList.map((item, index) => (
            <tr key={index}>
              <th  class="bg-info" scope="row">{item.devId}</th>
              <td  class="bg-info">{item.name}</td>
              <td  class="bg-info">{item.users.userId}</td>
              <td  class="bg-info">{item.memberSince}</td>
              <td  class="bg-info">{item.skillLevel}</td>
              <td  class="bg-info">{item.reputation}</td>
              <td  class="bg-info">
                <input
                  type="button"
                  value="🗑️DELETE"
                  className="btn btn-danger btn-sm mb-1 ml-1 mr-2 "

                  onClick={() =>deleteRecord1(item)}
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