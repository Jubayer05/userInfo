import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserData } from "../../actions/userAction";
import "./Form.css";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
};

const Form = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    if (
      userInfo.first_name === "" ||
      userInfo.last_name === "" ||
      userInfo.email === ""
    ) {
      alert("Please Fill Up The Form");
    } else {
      dispatch(postUserData(userInfo));
    }
  };
  return (
    <Paper className="employee__form">
      <h2>Create a employee</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className="employee__input"
          variant="outlined"
          fullWidth
          label="First Name"
          onChange={(e) =>
            setUserInfo({ ...userInfo, first_name: e.target.value })
          }
        />
        <TextField
          className="employee__input"
          variant="outlined"
          fullWidth
          label="Last Name"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              last_name: e.target.value,
            })
          }
        />
        <TextField
          className="employee__input"
          variant="outlined"
          fullWidth
          label="Email"
          type="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <TextField
          className="employee__input"
          variant="outlined"
          fullWidth
          label="Image Link"
          onChange={(e) => setUserInfo({ ...userInfo, avatar: e.target.value })}
        />
        <Button
          className="employee__input"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
