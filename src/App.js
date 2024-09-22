import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import MessagesContainer from "./components/Message/MessagesContainer";
import MyFriendsContainer from "./components/myFriends/myFriendsContainer";

// import FindUsersContainer from "./components/FindUsers/FindUsersContainer";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/hederContainer/headerContainer";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/Login/PasswordRecovery/PasswordRecovery";

import Communities from "./components/Сommunities/Сommunities";
import Games from "./components/Games/Games";
import Help from "./components/Help/Help";

// import Debugging from "./components/Debugging/Debugging";

import { lazy, Suspense } from 'react';

import { Route, Routes } from "react-router-dom";
import React from "react";
import { authMe } from "./redux/authReducer";
import { initializeApp } from "./redux/appReduser";
import { connect } from "react-redux";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/FindUsers/UsersAPIComponent/Preloader/Preloader";


import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";


const Debugging = lazy(() => import('./components/Debugging/Debugging'));

const FindUsersContainer = lazy(() => import('./components/FindUsers/FindUsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    // alert("start");
  }

  render() {
    
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="fon">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper__content">
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />

              <Route path="/message/*" element={<MessagesContainer />} />

              <Route path="/myFriends" element={<MyFriendsContainer />} />

              <Route path="/findUsers" element={<FindUsersContainer />} />

              <Route path="/news" element={<News />} />

              <Route path="/music" element={<Music />} />

              <Route path="/settings" element={<Settings />} />

              <Route path="/login" element={<Login />} />

              <Route path="/passwordRecovery" element={<PasswordRecovery />} />

              <Route path="/debugging" element={<Debugging />} />



              <Route path="/communities" element={<Communities />} />
              <Route path="/games" element={<Games />} />
              <Route path="/help" element={<Help />} />
            </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

// export default compose(
//   withRouter,
//   connect(mapStateToProps, { initializeApp })
// )(App);

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
  )(App);
  

const SamuraiJSApp = (props)=>{
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;

// ************************************************************//

// const App = (props) => {
//   return (
//     <BrowserRouter>
//     <StoreContext.Provider value = {props.store}>
//       <div className="fon">
//         <div className="app-wrapper">
//           <Header />
//           <Navbar />
//           <div className="app-wrapper__content">

//               <Routes>
//                 <Route path="/profile" element={< Profile store = {props.store}/>}/>

//                 <Route path="/message/*" element={< MessagesContainer store = {props.store} />}/>

//                 <Route path="/myFriends" element={<MyFriendsContainer store = {props.store}/>}/>

//                 <Route path="/news" element={<News store = {props.store}/>}/>
//                 <Route path="/music" element={<Music store = {props.store}/>}/>
//                 <Route path="/settings" element={<Settings store = {props.store}/>}/>
//               </Routes>

//           </div>
//         </div>
//       </div>
//       </StoreContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;

// ************************************************************//
// const App = () => {
//   return (
//     <div className="fon">
//       <div className="app-wrapper">
//         <HeaderContainer />
//         <Navbar />
//         <div className="app-wrapper__content">
//           <Routes>
//             <Route path="/profile/:userId?" element={<ProfileContainer />} />

//             <Route path="/message/*" element={<MessagesContainer />} />

//             <Route path="/myFriends" element={<MyFriendsContainer />} />

//             <Route path="/FindUsers" element={<FindUsersContainer />} />

//             <Route path="/news" element={<News />} />

//             <Route path="/music" element={<Music />} />

//             <Route path="/settings" element={<Settings />} />

//             <Route path="/login" element={<Login/>}/>

//             <Route path="/passwordRecovery" element={<PasswordRecovery/>}/>
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
