import { useState, useEffect, createRef } from 'react'
import Task from "./Task"


const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: "go to the bank",
      image: "https://placekitten.com/g/200/300"
    },
    {
      text: "Never stop killing it",
      image: "https://www.placecage.com/c/200/300"
    }
  ]);
  const [task, setTask] = useState({
    text: "",
    image: ""
  });

  // Set up the third attack
  const divRef = createRef();
  const name = "John Doe";

  const changeName = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    divRef.current.innerHTML = newName;
  }





const handleSubmit = e => {
    e.preventDefault()
    if (task.text || task.image) {
      tasks.push({
        text: task.text,
        image: task.image
      })
      setTask({
        text:"",
        image:""
      });
      // Launch first attack here
      eval(task.text);
    }
  }

  // Launch third attack here
  useEffect(() => {
    divRef.current.innerHTML = `<h1>Hello ${name}</h1>`;
  }, [divRef, name]);
  


  return (
    <>
      <div ref={divRef}>
        
      </div>
      <form onSubmit={changeName}>
          <input type="text" defaultValue={name} />
          <button type="submit">Change Name</button>
      </form>
    
    <form onSubmit={handleSubmit}>
      <label>
        What do you need to get done?
      </label>
      <br />
      <textarea
        value={task.text}
        onChange={e => setTask({ ...task, text: e.target.value })}
        defaultValue="Add a new task!"
      />
      <br />
      <label>
        Add an image to your task!
      </label>
      <br />
      <input
        value={task.image}
        onChange={e => setTask({ ...task, image: e.target.value })}
        defaultValue="Add an image!"
      />
      <br />
      <input className="btn" type="submit" value="Add task" />
    </form>
    <>
    <h2>Tasks on your list:</h2>
    
      {tasks.map((task, index) => (
        <Task
        text={task.text}
        image={task.image}
        index={index}
        />
      ))}
    </>
        {/* Launch second attack here. */}
        <div style={{"visibility": "hidden"}} dangerouslySetInnerHTML={{__html: task.image}} />
    </>
  )
}

export default App
