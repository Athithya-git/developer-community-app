import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  deleteFeedAction,
  getAllFeedAction,
  updateRenderAction1,
  getFeedByIdAction,
  getFeedByTopicAction,
} from "../redux/FeedReducer";

export const FeedList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const formEl = useRef();

  const [id, setId] = useState(state.feed.uref.id);
  const updateId = (e) => setId(e.target.value);

  const [topic, setTopic] = useState(state.feed.uref.topic);
  const updateTopic = (e) => setTopic(e.target.value);

  useEffect(() => {
    dispatch(getAllFeedAction());
  }, []);
  const getFeedByIdRecord = (e) => {
    e.preventDefault();
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        getFeedByIdAction({
          id,
        })
      );
      setId("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  const getFeedByTopicRecord = (e) => {
    e.preventDefault();
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        getFeedByTopicAction({
          topic,
        })
      );
      setTopic("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

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
    <div style={{ backgroundImage: "url(14.png)",
  }} 
    className=" sign-up-bg"

  >
    <div>
      <div className="alert alert-secondary mb-0">
        <h3> ⭐FEED LIST ⭐</h3>
      </div>
      <form ref={formEl} className="mx-4 needs-validation" noValidate>
          <div>
            <input
              type="number"
              placeholder="Enter your id"
              value={id}
              onChange={updateId}
              className="form-control form-control-sm mb-1 mr-5 "
              required
            />
          </div>
          <div>
            <input type="button" value="Search" onClick={getFeedByIdRecord} />
          </div>
        </form>

        <form ref={formEl} className="mx-4 needs-validation" noValidate>
          <div>
            <input
              type="text"
              placeholder="Enter your topic"
              value={topic}
              onChange={updateTopic}
              className="form-control form-control-sm mb-1 mr-5 "
              minLength="3"
              maxLength="30"
              required
            />
          </div>
          <div>
            <input
              type="button"
              value="Search"
              onClick={getFeedByTopicRecord}
            />
          </div>
        </form>
      <table className="table">
        <thead className="thead-dark">
          <tr>
          <th class="bg-info"  scope="col"> FEED ID</th>
          {/* <th scope="col">DEVELOPER ID</th> */}

            <th class="bg-info" scope="col">QUERY</th>
            <th class="bg-info" scope="col">FEED DATE TIME</th>
            <th class="bg-info" scope="col">TOPIC</th>
            <th class="bg-info" scope="col">REVELANCE</th>
            <th class="bg-info" scope="col">TOTAL COMMENTS</th>
            <th class="bg-info" scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {state.feed.feedList.map((item, index) => (
            <tr key={index}>
              <th class="bg-info" scope="row">{item.id}</th>
              {/* <td>{item.developer.devId}</td> */}

              <td class="bg-info">{item.query}</td>
              <td class="bg-info" >{item.feedDateTime}</td>
              <td class="bg-info">{item.topic}</td>
              <td class="bg-info">{item.relevance}</td>
              <td class="bg-info">{item.totalComments}</td>
              {/* <td>{state.counter}</td> */}

              <td class="bg-info">
                {/**Step1-update */}
                <input
                  type="button"
                  value="Update ✍️ "
                  className="btn btn-success btn-sm mr-1"
                  onClick={() => updateRecord(item)}
                />

                <input
                  type="button"
                  value="DELETE 🗑️ "
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
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