import { pool } from "../db.js";

//* ----------------- GET TASK BY ID -------------------------
export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ? ", [
    req.params.id,
  ]);

  if (result.length === 0)
    return res.status(404).json({mensaje: "TASK NOT FOUNDp"})

  res.json(result[0]);
};

//* ----------------- GET ALL TASKS -------------------------
export const getTasks = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks ORDER BY ASC");
  res.json(result);
};

//* ----------------- CREATE TASK -------------------------
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

//* ------------------ DELETE TASK -------------------------
export const deleteTask = async (req, res) => {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ? ", [
    req.params.id,
  ]);

  if (result.length === 0)
    return res.status(404).json({mensaje: "TASK NOT FOUND"})

  return res.sendStatus(204)
};
