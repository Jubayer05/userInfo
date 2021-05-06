import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import User from "../User/User";

const SeeAllUser = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <h1 className="primary__heading">See All User Here</h1>
      <Grid container>
        <Grid item md={8}>
          <User userData={userData} route="Back To Home" />
        </Grid>
        <Grid item md={4}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default SeeAllUser;
