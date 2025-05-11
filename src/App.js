import {useState} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css'
import TodoHeader from './components/ToDoHeader';
import TodoInput from './components/ToDoInput';
import TodoList from './components/ToDoList';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useLocalStorage("todos", []);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, itemIndex) => itemIndex !== index)
    );
  };
  return (
    <div className="container">
      <TodoHeader count={toDos.length} />
      <TodoInput toDo={toDo} onChange={onChange} onSubmit={onSubmit}/>
      <hr className="divider" />
      <TodoList todos={toDos} onDelete={deleteToDo} />
    </div>
  );
}

export default App;