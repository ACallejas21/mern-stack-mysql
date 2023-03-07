import { pool } from "../db.js";

export const getTask = (req, res) => {
  res.send("obteniendo Tarea");
};

export const getTasks = (req, res) => {
  res.send("obteniendo Tareas");
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks (title, description) VALUES (? , ?)",
    [title, description]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    description,
  });
  res.send("creando Tareas");
};

export const updateTask = (req, res) => {
  res.send("actualizando Tareas");
};

export const deleteTask = (req, res) => {
  res.send("eliminando Tareas");
};
