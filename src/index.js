import './style.css';
import { useState } from 'react';

let nextID = 0;

function InputBar() {
  const [name, setName] = useState('');
  const [tasks, setTask] = useState([]);

  function handleClick() {
    setName('');
    setTask([...tasks, { id: nextID++, name: name }]);
  }
  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Add task"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <List tasks={tasks} />
    </div>
  );
}

function List({ tasks }) {
  const listTasks = tasks.map((task) => <li key={task.id}>{task.name}</li>);
  return <ul>{listTasks}</ul>;
}

function App() {
  return <InputBar />;
}

export default App;