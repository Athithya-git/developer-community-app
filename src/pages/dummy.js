// import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";

// export const DeveloperList = () => {
//     const state = useSelector((state) => state);
//     let history = useHistory();

//     const addDeveloper = (e) => {
//         <h1>Add Developer Page</h1>
//     }
//     if (state.user.authSuccess === true) {
//         // redirecting the user /employee-list page;
//         // history.push("/employee-list");
//         history.push("/add-developer-list");
//       }
// return (
//     <div>
//       <div className="alert alert-secondary mb-0">
//         <h3>Developer Community Pager</h3>
//       </div>
//       <div>
//       <Link to="/add-developer-list">

//             <input
//               type="button"
//               value="ADD DEVELOPER"
        
//               className="btn btn-info btn-lg w-100"
//             />
//             </Link>
//           </div>
    
//   </div>
// );
// }