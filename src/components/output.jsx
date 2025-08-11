import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { ClassNames } from '@emotion/react';
import EditIcon from '@mui/icons-material/Edit';





function TaskList({ value, indexNumber, task , setTask  }) {

  let deleteRow=()=>{
    // alert(indexNumber)
    let afterDeleteTask = task.filter((v, i)=>  i != indexNumber)
    console.log(afterDeleteTask);
    
    setTask(afterDeleteTask)
  }



  return (
    <li
      className='w-full bg-amber-400 my-4 p-2 rounded-2xl flex'>
         {value} 
         <span onClick={deleteRow} className='ml-5 manualLi cursor-pointer'> &times; </span> </li>

  )


}

export default TaskList