import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FiArrowDownLeft, FiSquare, FiCheck} from 'react-icons/fi'
import api from "../../api/api";


const Todos = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.get('todos').then(({ data }) => {
      setTodos(data)
    });
  }, []);

  function handleClick(id) {
    let toDoList = [...todos];
    const index = toDoList.findIndex(item => item.id === id);
    toDoList[index].completed = !toDoList[index].completed;
    setTodos(toDoList);
  }

  return (
    <div id="page-todos">
      <header>
        <Link to="/">
          <FiArrowDownLeft />
          Home
        </Link>
        <Link to="/posts">
          Postagens
        </Link>
        <Link to="/albuns">
          Albuns
        </Link>
      </header>
      <div id="todos">
        <h1>TO-DOs</h1>
        <div className="field">
          <ul className="items-to-do">
            {todos.map(todo => (
              <li key={todo.id} onClick={() => handleClick(todo.id)}>
                {todo.completed ? <FiCheck /> : <FiSquare />}
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}


export default Todos

