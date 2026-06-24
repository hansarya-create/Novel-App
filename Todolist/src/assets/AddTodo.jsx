import React, { useState } from 'react'

export default function Todo() {

    const[todos, setTodo] = useState([
        {id: 1, name: "Learn React", status: false},
        {id: 2, name: "Learn JavaScript", status: true},
        {id: 3, name: "Build Projects", status: false},
    ]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const newTodo = {
            id: Date.now(),
            name: newTask,
            status: false,
        };
        setTodo([...todos, newTodo]);
        setNewTask("");
    };
    const deleteTask = (id) => {
        const updateTodo  = todos.filter(todo => todo.id !== id);
        setTodo(updateTodo);
    };
    const toggleStatus = (id) => {
        setTodo(todos.map(todo =>
            todo.id === id ? {...todo, status: !todo.status} : todo
        ));
    };

  return (
      <div>
        <h1>My Todo List</h1>
        <br />
        <div style={{ marginBottom: '20px' }}>
            <input type="text" placeholder="Enter a new todo" value={newTask} onChange={handleInputChange} style={{padding : "8px"}} />
            <button onClick={addTask}>Add Todo</button>
        </div>
     
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo) => (
                <li key={todo.id} >
                <div>
                    <input type="checkbox" checked={todo.status} onChange = { () => toggleStatus(todo.id) }style={{ marginRight: '10px' }} />
                    <span style={{textDecoration: todo.status ? 'line-through' : 'none'}}>
                        {todo.name}
                    </span>
                </div>
            <button onClick={() => deleteTask(todo.id)} style={{backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer', padding: '5px'}}>Delete</button>
        </li>
        ))}
      </ul>
        </div>
  );
};