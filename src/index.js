import './style.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoTable() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
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

