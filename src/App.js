import { useState } from 'react';
import data from './data.json';

// Components
import Header from "./Header";

function App() {
  const [ todoList, setTodoList ] = useState(data);


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
