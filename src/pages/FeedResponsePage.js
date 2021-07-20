import { useState } from "react";

export const FeedResponsePage = () => {
  let img = { maxWidth: "100%", maxHeight: "100%" };
  let mystyle = {
    borderRadius: "20px",
    outline: "none",
    resize: "none",
    fontSize: "24px",
  };
  let [posts, setPosts] = useState([]);
  let [post, setpost] = useState("");
  const update = (e) => {
    setpost(e.target.value);
  };
  const add = () => {
    if (post !== "") {
      const newPosts = [post, ...posts];
      setPosts(newPosts);
      setpost("");
    }
  };
  return (
    <div>
      <h1 className="bg-secondary text-light m-3 p-3">DEVELOPER COMMUNITY</h1>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-9 ">
          <div className="row">
            <textarea
              style={mystyle}
              name="Text here"
              value={post}
              rows="2"
              onChange={update}
            ></textarea>
            <input
              className="btn btn-info btn-sm vh- "
              type="button"
              value="POST"
              onClick={add}
            ></input>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {posts.length === 0 && (
        <div className="container alert alert-danger mt-5 text-center">
          <h3>You have not posted some anything..!😴</h3>
        </div>
      )}
      {posts.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </div>
  );
};
function Post(post) {
  console.log(post);
  let divstyle = { backgroundColor: "black", color: "white" };
  let img = { maxWidth: "50%", maxHeight: "50%" };
  let buttonstyle = { width: "100%", textAlign: "left" };
  let [comments, setcomments] = useState([]);
  let [comment, setcom] = useState("");
  let [like, setlike] = useState(0);
  let [show, setshow] = useState(false);
  const updateComment = (e) => {
    setcom(e.target.value);
  };
  const addComment = () => {
    if (comment !== "") {
      const post2Com = [comment, ...comments];
      setcomments(post2Com);
      setcom("");
    }
  };
  const addLike = () => {
    like = like + 1;
    setlike(like);
  };

  const showcomment = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  return (
    <div style={divstyle}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-11">
            <h3>manoj</h3>
            <p>@manoj</p>
            <h5 className="mt-3">{post.post}</h5>
            <div className="row mt-3 ">
              <div className="col-3">
                <button
                  style={buttonstyle}
                  className="bg-danger text-light"
                  onClick={addLike}
                >
                  <span>👍 </span>
                  {like}
                </button>
              </div>
              <div className="col-3">
                <button
                  style={buttonstyle}
                  className="bg-danger text-light"
                  onClick={showcomment}
                >
                  {" "}
                  💬 Comments
                </button>
              </div>
              <div class="col-3">
                <button type="button" class="bg-danger text-light">
                  <span class="glyphicon glyphicon-envelope"></span>
                  <span class="badge">Topic = 🔥 Java</span>
                </button>
              </div>
              <div class="col-3">
                <button type="button" class="bg-danger text-light">
                  <span class="glyphicon glyphicon-envelope"></span>
                  <span class="badge">Relavance = 40</span>
                </button>
              </div>
            </div>
            {show === true && (
              <div className="col mt-3">
                {comments.map((item, index) => (
                  <div key={index} className="alert alert-danger row">
                    <div class="col-2">
                      <button type="button" class="bg-danger text-light">
                        <span class="glyphicon glyphicon-envelope"></span>
                        <span class="badge">Accuracy=40</span>
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        style={buttonstyle}
                        className="bg-danger text-light"
                        onClick={addLike}
                        class="position-absolute bottom-0 end-0"
                      >
                        <span>👍 </span>
                        {like}
                      </button>
                    </div>

                    <div className="col-1">
                      <h6>User101:</h6>
                    </div>
                    <div className="col-10">
                      <h6>{item}</h6>
                    </div>
                  </div>
                ))}
                <div className="col-10">
                  <div className="row">
                    <input
                      type="text"
                      className="mb-3"
                      value={comment}
                      onChange={updateComment}
                    ></input>
                  </div>
                </div>
                <div className="col-2">
                  {" "}
                  <button
                    style={buttonstyle}
                    className="bg-danger text-light"
                    onClick={addComment}
                  >
                    Comment ▶️
                  </button>{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
