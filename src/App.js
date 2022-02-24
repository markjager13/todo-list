import { useState } from 'react';
import data from './data.json';

// Components
import Header from "./Header";
import ToDoList from './ToDoList';

function App() {
  const [ toDoList, setTodoList ] = useState(data);


  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
