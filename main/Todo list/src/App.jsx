import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let taskId = 0;
let tasklength = 0;
function App() {
  const [Task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])


function itemToDelete(obj){
  setTaskList(taskList.filter(item=>item.id!==obj))
}

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
        tasklength++;
        {tasklength>10 && <>{alert("bs kar bhai pehle etna to krle todo list hu chu#@ya nhi...")} {setTaskList([])}</>}
        
      }}>
      <span class="button__text">Add Task</span>
      <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
      </button>
    </div>
    <ul>
    <div className='Tasks'>
   
    {taskList.map(taskList => (
        taskList.name !== "" && (
            <div className='task' key={taskList.id}>
                <li>{taskList.name}</li>
                
                <button class="deleteButton" onClick={()=>{itemToDelete(taskList.id)}}>
                  <span>Clear!</span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-miterlimit="2" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"></path></svg>
                  </span>
                  </button>
                  
            </div>
        )
    ))}
</div>
    
    </ul>

    </div>
   
  )
}

export default App
