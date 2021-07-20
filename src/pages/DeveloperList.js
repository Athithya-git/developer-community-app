import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    
  getAllDeveloperAction,
  updateRenderAction,
} from "../redux/DeveloperReducer";
import { AppNav } from "./AppNav";
import { UserSignIn } from "./UserSignIn";



export const DeveloperList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDeveloperAction());
  }, []);

  

  // 2
  const updateRecord = (item) => {
    console.log("Update Record", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigating to the page
    history.push("/developer-upsert");
  };



  return (
    <div style={{ backgroundImage: "url(14.png)",
  }} 
    className=" sign-up-bg"

  >
    <div>
      <div className="alert alert-secondary mb-0">
        <h3> ⭐ DEVELOPER LIST ⭐</h3>
      </div>
      
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th  class="bg-info" scope="col">DEVELOPER ID</th>
            <th  class="bg-info" scope="col">NAME</th>
            <th  class="bg-info" scope="col">USER ID</th>
            <th  class="bg-info" scope="col">MEMBER SINCE</th>
            <th  class="bg-info" scope = "col">SKILL LEVEL</th>
            <th class="bg-info" scope = "col">REPUTATION</th>
            <th class="bg-info" scope = "col">ACTIONS</th>

            
          </tr>
        </thead>
        <tbody>
          {state.developer.developerList.map((item, index) => (
            <tr key={index}>
              <th  class="bg-info" scope="row">{item.devId}</th>
              <td class="bg-info">{item.name}</td>
              <td  class="bg-info">{item.users.userId}</td>
              <td  class="bg-info">{item.memberSince}</td>
              <td  class="bg-info">{item.skillLevel}</td>
              <td  class="bg-info">{item.reputation}</td>

              <td class="bg-info">
                <input
                  type="button"
                  value="Update ✍️"
                  className="btn btn-success btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  onClick={() => updateRecord(item)}
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