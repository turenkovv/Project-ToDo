import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { fromStorage } from "./store/todoSlice";
import { useEffect } from "react";
import { connect } from "react-redux";
import './style.css';


function App({ fromStorage }) {

  const addFromStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todo'));
    if(storedTodos) fromStorage(storedTodos.todoList);
  }

  useEffect(() => {
    if (!localStorage.getItem('todo')) localStorage.setItem('todo', JSON.stringify({todoList: []}))
    addFromStorage()
  })

  return (
    <div className="wrapper" >
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

const mapDispatchToProps = {
  fromStorage
}
export default connect(null, mapDispatchToProps)(App);
