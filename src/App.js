import React, { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import BlogDetails from './Pages/Blogs/BlogDetails';
import blogDetails from './Pages/Blogs/BlogDetails';
import BlogList from './Pages/Blogs/BlogList';
import HomeBlog from './Pages/Blogs/HomeBlog';
import CriminalDetails from './Pages/Criminals/CriminalDetails';
import Criminals from './Pages/Criminals/Criminals';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import TestApi from './Pages/TestApi';
import VerifayToken from './Pages/VerifayToken';
import VerificationCode from './Pages/VerificationCode';
import AddComplain from './UserDashboard/AddComplain';
import DetailsComplain from './UserDashboard/DetailsComplain';
import Feedback from './UserDashboard/Feedback';
import HomeUserDashboard from './UserDashboard/HomeUserDashboard';
import UpdateProfile from './UserDashboard/UpdateProfile';
import ViewComplain from './UserDashboard/ViewComplain';
import ViewProfile from './UserDashboard/ViewProfile';

import AddMissing from './UserDashboard/AddMissing';
import MissingPersongDetails from './UserDashboard/MissingPersongDetails';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    email:'',
    name:''
  })

console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/resigtraion">
                <Registration/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/userDashboard">
              <HomeUserDashboard/>
            </Route>
            <PrivateRoute path="/addComplain">
              <AddComplain/>
            </PrivateRoute>
            <PrivateRoute path="/viewComplain">
              <ViewComplain/>
            </PrivateRoute>
            <Route path="/detailsComplain/:id">
              <DetailsComplain/>
            </Route>
            {/* mission */}
            <PrivateRoute path="/addMissing">
              <AddMissing/>
            </PrivateRoute>
            <PrivateRoute path="/MissingDetails/:id">
              <MissingPersongDetails/>
            </PrivateRoute>
            <PrivateRoute path="/viewProfile">
              <ViewProfile/>
            </PrivateRoute>
            <PrivateRoute path="/updateProfile">
              <UpdateProfile/>
            </PrivateRoute>
            <PrivateRoute path="/feedback">
              <Feedback/>
            </PrivateRoute>
           <PrivateRoute path="/criminals/:id">
              <Criminals/>
            </PrivateRoute>
            {/*  <PrivateRoute path="/CriminalDetails">
              <CriminalDetails/>
            </PrivateRoute> */}
            <Route path="/blog">
              <HomeBlog/>
            </Route>
            <Route path="/blogDetails">
              <BlogDetails/>
            </Route>
            <Route path="/testApi">
              <TestApi/>
            </Route>
            <Route path="/verifyCode">
              <VerificationCode/>
            </Route>
            <Route path="/verityToken">
              <VerifayToken/>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
