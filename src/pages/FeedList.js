import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  deleteFeedAction,
  getAllFeedAction,
  updateRenderAction1,
} from "../redux/FeedReducer";

export const FeedList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllFeedAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.id);
    //dispatch the call.
    dispatch(deleteFeedAction(item));
  };

  // Step2-update
  const updateRecord = (item) => {
    console.log("UPDATE RECORD", item);

    // Step3-updating the store
    dispatch(updateRenderAction1(item));

    //navigating to the page
    history.push("/feed-upsert");
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
            <th scope="col">FEED DATE TIME</th>
            <th scope="col">TOPIC</th>
            <th scope="col">REVELANCE</th>
            <th scope="col">TOTAL COMMENTS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.feed.feedList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.query}</td>
              <td>{item.feedDateTime}</td>
              <td>{item.topic}</td>
              <td>{item.relevance}</td>
              <td>{item.totalComments}</td>
              {/* <td>{state.counter}</td> */}

              <td>
                {/**Step1-update */}
                <input
                  type="button"
                  value="Update ✍️ "
                  className="btn btn-outline-secondary btn-sm mr-1"
                  onClick={() => updateRecord(item)}
                />

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
};