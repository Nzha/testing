import './style.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Spend evening learning difference between Tailwind, Chakra and Mantine.

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

  function handleEdit(id, name) {
    const newTodos = [...todos];
    const todo = newTodos.find((a) => a.id === id);
    todo.name = name;
    setTodos(newTodos);
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
        handleEdit={handleEdit}
      />
    </div>
  );
}

function TodoList({ todos, handleDeleteTodo, handleCheck, handleEdit }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
      />
    );
  });
}

function Todo({ todo, handleDeleteTodo, handleCheck, handleEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(todo.name);

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
        {editMode ? (
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoFocus
          />
        ) : (
          <span>{todo.name} </span>
        )}
        <button
          onClick={() => {
            setEditMode(!editMode);
            handleEdit(todo.id, name);
          }}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
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

