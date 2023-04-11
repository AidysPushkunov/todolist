import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <img
        src="./uploads/sprites/Nasledie-10070h40-b.ugolsepiya-2016-g..jpg"
        className="decoration"
      />
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
        <button className="add_button">Кожор</button>
        <div className="list">
          <div className="task_all">
            <div className="task">Кузуктап барар</div>
            <div>
              <div className="delete">
                <img src="./uploads/sprites/1345874.png" />
              </div>
            </div>
          </div>
          <div className="task_all">
            <div className="task">Кузуктап барар</div>
            <div>
              <div className="delete">
                <img src="./uploads/sprites/1345874.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
