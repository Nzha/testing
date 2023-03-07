import './style.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoTable() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || [];
  });

  // Save todos in local storage every time a change in todos occurs
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleAdd() {
    setName('');
    setTodos([...todos, { id: uuidv4(), name: name, complete: false }]);
  }

  function handleDelete(todo) {
    setTodos(todos.filter((a) => a.id !== todo.id));
  }

  function handleCheck(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearComplete() {
    setTodos(todos.filter(todo => todo.complete === false))
  }

  function handleClearAll() {
    setTodos([]);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <div>
        <button onClick={handleClearComplete}>Clear Complete</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
      <div>
        You have {todos.filter(todo => !todo.complete).length} tasks left
      </div>
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
}

function TodoList({ todos, handleDelete, handleCheck }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    );
  });
}

function Todo({ todo, handleDelete, handleCheck }) {
  return (
    <div>
      <label id={todo.id}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            handleCheck(todo.id);
          }}
        />
        {todo.name}{' '}
        <button
          onClick={() => {
            handleDelete(todo);
          }}
        >
          Delete
        </button>
      </label>
    </div>
  );
}

function App() {
  return <TodoTable />;
}

export default App;
