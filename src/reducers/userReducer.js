/* eslint-disable import/no-anonymous-default-export */
export default (userInfo = [], action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return action.payload;
    case "POST_USER_DATA":
      return [...userInfo, action.payload];
    default:
      return userInfo;
  }
};
