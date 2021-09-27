import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import StepOne from "../components/StepOne";
import Heading from "../components/Heading";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

const AppRouter = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Heading />
        <Switch>
          <Route
            render={(props) => (
              <StepOne {...props} user={user} updateUser={updateUser} />
            )}
            path="/"
            exact={true}
          />
          <Route
            render={(props) => (
              <StepTwo {...props} user={user} updateUser={updateUser} />
            )}
            path="/second"
          />
          <Route
            render={(props) => (
              <StepThree
                {...props}
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            )}
            path="/third"
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
