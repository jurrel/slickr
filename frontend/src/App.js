import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage"
import PhotoPage from "./components/PhotoPage"
import UploadPage from "./components/UploadPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import EditImage from "./components/EditPhoto";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/photos/:photoId">
            <PhotoPage />
          </Route>
          <Route path="/upload">
            <UploadPage />
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/photos/:photoId/edit">
            <EditImage />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
