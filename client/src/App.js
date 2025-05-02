import './App.css';
import InputTodo from "./components/InputTodos";
import ListTodo from "./components/ListTodos";

function App() {
  return (
    <>
    <div className="container ">
    <InputTodo />
    <ListTodo />
    </div>
    </>
  );
}

export default App;
