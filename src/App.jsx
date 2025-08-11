import { useState } from 'react'
import './App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


function App() {
  let [task, setTask] = useState([])


  let savedData = (e) => {
    let title = event.target.title.value;

    if (!task.includes(title) && task && title.trim() !== "") {
      let finalData = [...task, title]
      event.target.title.value = ""
      setTask(finalData)
    }
    else {
      alert("Task already exixst")
    }

    event.preventDefault();
  }

  let list = task.map((value, index) => {
    return (
      <TaskList value={value} key={index} indexNumber={index} task={task} setTask={setTask} />
    )
  })

  let deleteList = () => {
    setTask([])
  }

  return (

    <div className="App w-[95%] mx-auto mt-[50px] border-1 text-center flex justify-center  flex-col p-4   ">
      <h1 className='text-blue-400 text-[30px] my-4'>TASK MANAGER</h1>
      <form className='w-[100%] flex gap-5  ' onSubmit={savedData}>
        <input className='border-1 p-2 w-3/4 hover:bg-amber-50' placeholder='Enter text ' type="text" name='title' />
        <button className='bg-blue-500 w-1/3 hover:bg-blue-400 text-white'>save</button>
      </form>

      <div className='w-100%'>
        <ul>
          {list}
        </ul>
      </div>

      <button
        onClick={deleteList}
        className='w-[100%] bg-blue-500 mt-4 py-1 hover:bg-blue-400 text-white'>Clear List  <DeleteSweepIcon /></button>
    </div>

  )
}

export default App


function TaskList({ value, indexNumber, task, setTask }) {




  let deleteRow = () => {
    let afterDeleteTask = task.filter((v, i) => i != indexNumber)
    setTask(afterDeleteTask)
  }

  let editTask = () => {
    let newValue = prompt("Edit your task", value);
    if (newValue && newValue.trim() !== "") {
      let updatedTasks = [...task];
      updatedTasks[indexNumber] = newValue.trim();
      setTask(updatedTasks);
    }
  }

  return (
    <li
      // onClick={checkStatus}
      className={(status) ? 'completeTodo' : 'w-full bg-amber-400 my-4 p-2 rounded-2xl flex hover:bg-amber-300'}> {indexNumber + 1}. {value}
      <span className=' w-10 flex justify-center  manualLiedit cursor-pointer hover:shadow-[0_0_15px_#ff0] hover:scale-105 transition duration-300  ease-in-out ' onClick={editTask}><EditIcon /></span>

      <span onClick={deleteRow} className='ml-5 manualLicross cursor-pointer rounded-2xl hover:shadow-[0_0_15px_#ff0] hover:scale-105 transition duration-300  ease-in-out '> {/*&times;*/}<DeleteForeverIcon /> </span> </li>
  )
}