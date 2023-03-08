import { pool } from "../db.js";

//* ----------------- GET TASK BY ID -------------------------
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ? ", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ mensaje: "TASK NOT FOUNDp" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* ----------------- GET ALL TASKS -------------------------
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY title ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* ----------------- CREATE TASK -------------------------
export const createTask = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* ------------------ UPDATE TASK -------------------------
export const updateTask = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ? ", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* ------------------ DELETE TASK -------------------------
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ? ", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ mensaje: "TASK NOT FOUND" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
