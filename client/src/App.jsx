import { Route, Routes } from "react-router-dom";

import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage></TaskPage>}></Route>
            <Route path="/new" element={<TaskForm></TaskForm>}></Route>
            <Route path="/edit/:id" element={<TaskForm></TaskForm>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
