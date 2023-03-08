import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/task.api";

function TaskForm() {
  return (
    <div>
      <h1>HOLA</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit}>
            <label> title </label>
            <input
              type="text"
              name="title"
              placeholder="Escribe un titulo"
              onChange={handleChange}
              value={values.title}
            ></input>

            <label> description </label>
            <textarea
              name="description"
              rows={3}
              placeholder="Escribe una descripción"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
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
