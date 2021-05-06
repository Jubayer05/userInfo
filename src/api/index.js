import axios from "axios";

const url = "https://reqres.in/api/users?page=2";
// const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = () => axios.get(`${url}`);
export const postData = (newPost) => axios.post(`${url}`, newPost);
