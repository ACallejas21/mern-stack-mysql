import axios from "axios";


//* -----------------GET TASK---------------------
export const GetTaskRequest = async () =>
  await axios.get("http://localhost:4000/tasks");


//* -----------------CREATE TASK---------------------
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);
