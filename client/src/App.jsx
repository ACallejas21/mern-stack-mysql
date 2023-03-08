import { Route, Routes } from "react-router-dom";


import TaskForm from "./pages/TaskForm"
import TaskPage from "./pages/TaskPage"
import NotFound from "./pages/NotFound"

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<TaskPage></TaskPage>}></Route>
        <Route path="/new" element={<TaskForm></TaskForm>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App