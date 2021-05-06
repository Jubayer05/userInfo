import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Chart from "../Chart/Chart";
import ChartAge from "../Chart/ChartAge";
import Form from "../Form/Form";
import User from "../User/User";
import "./Dashboard.css";

const Dashboard = () => {
  const getData = useSelector((state) => state.user);
  const userData = getData.slice(Math.max(getData.length - 4, 1));
  return (
    <>
      <h1 className="primary__heading">Dashboard</h1>
      <Grid container>
        <Grid className="dashboard__grid" item md={8}>
          <User userData={userData} route="Expand to show more details" />
        </Grid>
        <Grid className="dashboard__grid" item md={4}>
          <Form />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="dashboard__grid" item md={7}>
          <Chart />
        </Grid>
        <Grid className="dashboard__grid" item md={5}>
          <ChartAge />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
