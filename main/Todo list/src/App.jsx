import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let taskId = 0;
function App() {
  const [Task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])

  return (
    <div className='mainContainer'>
    <p className='title'>Task Tracker</p>
    <div className='taskAdder'>
      <input
      value={Task}
      type='text'
      className='input' 
      onChange={(e)=>setTask(e.target.value)}
      >
      </input>
      <button type="button" class="button" onClick={()=>{
        setTaskList([...taskList,{id:taskId++,name:Task}])
        setTask("");
      }}>
      <span class="button__text">Add Task</span>
      <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
      </button>
    </div>
    <ul>
    <div className='Tasks'>
    {taskList.map(taskList => (
          <div className='task'>
            <li key={taskList.id}>{taskList.name}</li>
            <button>Delete</button>
          </div>
        ))}
    </div>
    
    </ul>

    </div>
   
  )
}

export default App
