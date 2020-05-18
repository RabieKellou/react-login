import React, { useState, useEffect } from "react"
import LandingPage from "./LandingPage"
import Dashboard from "./Dashboard"
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (loggedIn && location.pathname !== '/dashboard') {
      //redirect to dashboard
      history.push('/dashboard')
    } else if (!loggedIn & location.pathname != '/') {
      //redirect to dashboard
      history.push('/')
    }

  }, [loggedIn, location.pathname]);
  return (

    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/dashboard" exact >
          <Dashboard setLoggedIn={setLoggedIn} />
        </Route>
        <Route>
          <h1>Not found</h1>
        </Route>
        {/* <Redirect to="/"/> */}
      </Switch>
    </div>
  );
}

export default App
