import { USER_TYPE } from "../app/constants/commonConstants";

const users = [
  {
    id: 1,
    username: "richa_garg",
    firstName: "Richa",
    lastName: "Garg",
    password: "password",
    userType: USER_TYPE.JOB_SEEKER,
  },
  {
    id: 2,
    username: "john_doe",
    firstName: "John",
    lastName: "Doe",
    password: "password",
    userType: USER_TYPE.EMPLOYER,
  },
];
export default users;
