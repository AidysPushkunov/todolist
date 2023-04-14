import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './component/Task/Task';
import ReactImageMagnify from 'react-image-magnify';

function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get-data').then((data) => {
      setTasks(data.data.response);
    });
  }, []);

  const getData = () => {
    axios.get('http://localhost:3001/get-data').then((data) => {
      setTasks(data.data.response);
    });
  };

  const addTask = () => {
    axios
      .post('http://localhost:3001/post-data', {
        value: value,
      })
      .then((data) => {
        getData();
        setValue('');
      });
  };

  return (
    <div className="App">
      <div className="decoration">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: './uploads/sprites/Nasledie-10070h40-b.ugolsepiya-2016-g..jpg',
            },
            largeImage: {
              src: './uploads/sprites/Nasledie-10070h40-b.ugolsepiya-2016-g..jpg',
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
      {/* <img
        src="./uploads/sprites/Nasledie-10070h40-b.ugolsepiya-2016-g..jpg"
        className="decoration"
      /> */}
      <div>
        <h1>Таскадулар</h1>

        <input
          value={value}
          placeholder="Таскаду..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="input_todo"
        />
        <button className="add_button" onClick={addTask}>
          Кожор
        </button>
        <div className="list">
          {tasks?.map((e) => {
            return <Task id={e.id} name={e.name} getData={getData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
