import './style.css';
import { useState } from 'react';

let nextId = 0;

function TodoTable() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  function handleDelete(todo) {
    setTodos(todos.filter((a) => a.id !== todo.id));
  }

  function handleAdd() {
    setName('');
    setTodos([...todos, { id: nextId++, name: name }]);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

function TodoList({ todos, handleDelete }) {
  const list = todos.map((todo) => (
    <li key={todo.id}>
      {todo.name}{' '}
      <button
        onClick={() => {
          handleDelete(todo);
        }}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{list}</ul>;
}

function App() {
  return <TodoTable />;
}

export default App;