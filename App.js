import './App.css';
import Clock from './clock';

import React, { useState, useEffect } from 'react';
import Todo from './todo';
function App() {
  const [todo, setTodo] = useState([]);

  // тре доробити бо щось не то 6.10
  // useEffect(() => {
  //   const raw = localStorage.getItem('todos') || JSON.stringify([])
  //   setTodo(JSON.parse(raw))
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('todo', JSON.stringify(todo))
  // }, [todo])

  const [on, setOn] = useState(true);
  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);

  return (
    <div>
       <Clock />
      <div className={on ? 'temne' :'svitle' }>
        <Todo todo={todo} setTodo ={setTodo}/>
      </div>
            <button onClick = {lightOn} > Темно </button>
            <button onClick = {lightOff}> Cвітло</button>
    </div>
  );
}
export default App;