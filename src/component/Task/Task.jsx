import axios from 'axios';

function Task(e) {


    let taskid = e.id

    const deleteTask = () => {
        axios.post('http://localhost:3001/delete-data', {
            id: taskid
        })
        .then((data) => {
            e.getData()
        });
      };

    return ( 
        <div className="task_all" key={e.id}>
        <div className="task">{e.name}</div>
        <div>
          <div className="delete" onClick={deleteTask}>
            <img src="./uploads/sprites/1345874.png" />
          </div>
        </div>
      </div>
     );
}

export default Task;