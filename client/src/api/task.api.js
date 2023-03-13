import axios from "axios";

const rootURL= 'http://localhost:4000';

//* -----------------GET TASK---------------------
export const GetTaskRequest = async () =>
  await axios.get(`${rootURL}/tasks`);


//* -----------------CREATE TASK---------------------
export const createTaskRequest = async (task) =>
  await axios.post(`${rootURL}/tasks`, task);

  //* -----------------DELETE TASK---------------------
export const deleteTaskRequest = async (id) =>
await axios.delete(`${rootURL}/tasks/${id}`,);