import axios from "axios";

const BASE_URL = "https://shape-backend.onrender.com/api";
const TOKEN = localStorage.hasOwnProperty("user")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken
  : "";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQ1ZDk5ZmUxYWRjNDE2ZDhlMTRlZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE1OTI1OSwiZXhwIjoxNjY5NDE4NDU5fQ.FyRlg4PUwTJ4bro-9Mx7KEDbMJLmLbf8iRbtjwweSek";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
