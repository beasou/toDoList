import { Header } from "./components/Header";
import { Newtask } from "./components/NewTask";
import { Task } from "./components/Task";

import "./global.css";

function App() {
 
  return (
    <>
      <Header/>
      <Newtask/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </>
  )
}

export default App
