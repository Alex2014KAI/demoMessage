import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// import store from './redux/store';

import store from "./redux/reduxStore";

import {Provider} from "react-redux";

import SamuraiJSApp from "./App"


const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      {/* <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter> */}

      <SamuraiJSApp/>
    </React.StrictMode>
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();




// const root = ReactDOM.createRoot(document.getElementById("root"));

// let rerenderEntrireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
//   // If you want to start measuring performance in your app, pass a function
//   // to log results (for example: reportWebVitals(console.log))
//   // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();
// };

// rerenderEntrireTree(store.getState());


// store.subscribe(() => {
//   let state = store.getState();

//   rerenderEntrireTree(state);
// });


