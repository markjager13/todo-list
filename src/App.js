import { useState } from 'react';
import data from './data.json';

// Components
import Header from "./Header";
import ToDoList from './ToDoList';

function App() {
  const [ toDoList, setTodoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
    });
    setTodoList(mapped);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
