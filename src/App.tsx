import { Header } from "./components/Header";
import { Newtask } from "./components/NewTask";
import { Task } from "./components/Task";
import { TaskCounter } from "./components/TaskCounter";

import "./global.css";

function App() {
 
  return (
    <>
      <Header/>
      <Newtask/>
      <TaskCounter/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </>
  )
}

export default App
