import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    
  getAllDeveloperAction,
  updateRenderAction,
} from "../redux/DeveloperReducer";
import { AppNav } from "./AppNav";


export const DeveloperList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  //const {UserSignIn} = require('./UserSignIn.js');

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
    <div>
      <div className="alert alert-secondary mb-0">
        <h3> Developer List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Dev ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserId</th>
            <th scope="col">Member Since</th>
            <th scope = "col">Reputation</th>
            <th scope = "col">Total Feeds</th>
            <th scope = "col">Is Verified</th>
            <th scope = "col">Is Block</th>
            <th scope = "col">Actions</th>

            
          </tr>
        </thead>
        <tbody>
          {state.developer.developerList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.devId}</th>
              <td>{item.name}</td>
              <td>{item.userId}</td>
              <td>{item.memberSince}</td>
              <td>{item.reputation}</td>
              <td>{item.totalFeeds}</td>
              <td>{item.isVerified?"true":"false"}</td>
              <td>{item.isBlock?"true":"false"}</td>

              <td>
                <input
                  type="button"
                  value="Update ✍️"
                  className="btn btn-outline-secondary btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  onClick={() => updateRecord(item)}
                />
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};