import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { createTaskRequest, } from "../api/task.api";
import { useTask } from "../context/TaskProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const { getTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const params = useParams()
  const navigate = useNavigate()
  console.log(params);

  useEffect( () => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task);
        setTask({
          title: task.title,
          description: task.description
        })
      }
    }
    loadTask()
  }, [])
  

  return (
    <div>
      <Formik
      enableReinitialize={true}
        initialValues={task}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            console.log("update");
            await updateTask(params.id, values)
          }else{
            try {
              const response = await createTaskRequest(values);
              console.log(response);
              actions.resetForm();
            } catch (error) {
              console.error(error);
            }
          }
          navigate('/')

         
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
      <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Edit Task" : "NEW TASK"}</h1>

            <label className="block"> title </label>
            <input
            className="px-2 py-2 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Escribe un titulo"
              onChange={handleChange}
              value={values.title}
            ></input>

            <label className="block"> description </label>
            <textarea
            className="px-2 py-2 rounded-sm w-full"

              name="description"
              rows={3}
              placeholder="Escribe una descripción"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-2 text-white w-full rounded-md">
              {" "}
              {isSubmitting ? "SAVING" : "SAVE"}{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
