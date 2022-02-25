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
/*
  // to better understand spread and map, lets rewrite this
  // more verbose but helps understanding
  // this works
  // in above: spread element 'task', set complete to whatever otherwise spread element as is and return 
  const handleToggle2 = (id) => {
    let mappedData = toDoList.map(function(item){
      if (item.id === Number(id)){
        item.complete = !item.complete;
        return item;
      }
      else {
        return item
      }
    })
    setTodoList(mappedData);
  }
*/

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    })
    setTodoList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
