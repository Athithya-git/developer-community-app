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

  const deleteRecord2 = (item) => {
    console.log("DELETE RECORD", item.id);
    //dispatch the call.
    dispatch(deleteAdminFeedAction(item));
  };

  return (
    <div style={{ backgroundImage: "url(66.jpg)" }} className=" sign-up-bg">
      <div>
        <div className="alert alert-secondary mb-0">
          <h3> ⭐FEED LIST ⭐</h3>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr class="bg-info">
              <th class="bg-info" scope="col">
                <div className="mr-3">FEED ID</div>
              </th>
              <th class="bg-info">QUERY</th>
              <th class="bg-info">FEED DATE TIME</th>
              <th class="bg-info">TOPIC</th>
              <th class="bg-info">REVELANCE</th>
              <th class="bg-info">TOTAL COMMENTS</th>
              <th class="bg-info">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {state.feed.feedList.map((item, index) => (
              <tr key={index}>
                <th class="bg-info">{item.id}</th>
                <td class="bg-info">{item.query}</td>
                <td class="bg-info">{item.feedDateTime}</td>
                <td class="bg-info">{item.topic}</td>
                <td class="bg-info">{item.relevance}</td>
                <td class="bg-info">{item.totalComments}</td>
                {/* <td>{state.counter}</td> */}

                <td class="bg-info">
                  <input
                    type="button"
                    value="DELETE 🗑️ "
                    // onClick={deleteRecord}
                    onClick={() => deleteRecord2(item)}
                    className="btn btn-danger btn-sm mb-1 ml-1 mr-2 "
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
