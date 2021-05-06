import * as api from "../api/index";

export const getUserList = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    dispatch({ type: "FETCH_USER_DATA", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const postUserData = (post) => async (dispatch) => {
  try {
    const { data } = await api.postData(post);
    dispatch({ type: "POST_USER_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};
