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

  function handleAddTodo() {
    if (!name) return;
    setName('');
    setTodos([...todos, { id: uuidv4(), name: name, complete: false }]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((a) => a.id !== id));
  }

  function handleCheck(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearComplete() {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  function handleClearAll() {
    setTodos([]);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        <button onClick={handleClearComplete}>Clear complete</button>
        <button onClick={handleClearAll}>Clear all</button>
      </div>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCheck={handleCheck}
      />
    </div>
  );
}

function TodoList({ todos, handleDeleteTodo, handleCheck }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleCheck={handleCheck}
      />
    );
  });
}

function Todo({ todo, handleDeleteTodo, handleCheck }) {
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
            handleDeleteTodo(todo.id);
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

