import axios from "axios";

const rootURL= 'http://localhost:4000';

//* -----------------GET TASKS---------------------
export const GetTaskRequest = async () =>
  await axios.get(`${rootURL}/tasks`);

    //* -----------------GET TASK---------------------
export const GetOneTaskRequest = async (id) =>
await axios.get(`${rootURL}/tasks/${id}`,);


//* -----------------CREATE TASK---------------------
export const createTaskRequest = async (task) =>
  await axios.post(`${rootURL}/tasks`, task);

  //* -----------------DELETE TASK---------------------
export const deleteTaskRequest = async (id) =>
await axios.delete(`${rootURL}/tasks/${id}`,);

  //* -----------------UPDATE TASK---------------------
  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${rootURL}/tasks/${id}`, newFields);

  
  //* -----------------Toggle TASK---------------------
  export const toggleTaskRequest = async (id, done) =>
  await axios.put(`${rootURL}/tasks/${id}`, {done});