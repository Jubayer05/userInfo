import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ route, userData }) => {
  console.log(userData);

  return (
    <Paper className="user">
      <div className="userData__container">
        {userData.map((user) => (
          <SingleUser user={user} />
        ))}
      </div>
      {route === "Expand to show more details" ? (
        <Link to="/seeAllUser">
          <Button className="user-btn" variant="contained" color="primary">
            {route}
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button className="user-btn" variant="contained" color="primary">
            {route}
          </Button>
        </Link>
      )}
    </Paper>
  );
};
export default User;

const SingleUser = ({ user }) => {
  return (
    <Paper className="user__single">
      <Avatar
        className="user__avatar"
        alt={user.employee_name}
        src={user.avatar || user.employee_name}
      />
      <div className="user__content">
        <h4 className="employee_name">
          {user.first_name} {user.last_name}
        </h4>
        <p className="user__text">Contact: {user.email}</p>
      </div>
    </Paper>
  );
};
