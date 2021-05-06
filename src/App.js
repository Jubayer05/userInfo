import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserList } from "./actions/userAction";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeeAllUser from "./components/SeeAllUser/SeeAllUser";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/seeAllUser" component={SeeAllUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
