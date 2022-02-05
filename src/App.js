
import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  return <div className="App">
    <h1>Todo App</h1>
    <AddTask/>
    <TodoList/>
  </div>;
}

export default App;
