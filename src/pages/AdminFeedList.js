import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  deleteAdminFeedAction,
  getAllAdminFeedAction,
} from "../redux/AdminReducer";

export const AdminFeedList = () => {
    
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllAdminFeedAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.id);
    //dispatch the call.
    dispatch(deleteAdminFeedAction(item));
  };

   

  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3>FEED LIST</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <div className="mr-3">FEED ID</div>
            </th>
            <th scope="col">QUERY</th>
            <th scope="col">FEED DATE</th>
            <th scope="col">FEED TIME</th>
            <th scope="col">TOPIC</th>
            <th scope="col">REVELANCE</th>
            <th scope="col">TOTAL COMMENTS</th>
            <th scope="col">LIKES</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.feed.feedList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.query}</td>
              <td>{item.feedDate}</td>
              <td>{item.feedTime}</td>
              <td>{item.topic}</td>
              <td>{item.relevance}</td>
              <td>{item.totalComments}</td>
              <td>{item.likes}</td>
              {/* <td>{state.counter}</td> */}

              <td>
               
                <input
                  type="button"
                  value="DELETE 🗑️ "
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-outline-danger btn-sm mb-1 ml-1 mr-2 "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}