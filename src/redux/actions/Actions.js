

import axios from 'axios'
import { GET_TASKS } from './../types/Types';


// this function allows you to get the tasks from the server side 
export const  gettasks=()=> async (dispatch)=>{

    try {
        // get the data from the backend 
        const res= await axios.get('/tasks/alltasks')
        dispatch({type:GET_TASKS , payload: res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

// writ down new task 
export const addtask=(newtask)=> async (dispatch)=>{

    try {
        const res= await axios.post('/tasks/add', newtask)
        dispatch(gettasks())
    } catch (error) {
        console.log(error)
    }
}

// delete the task you have accomplished
export const deletetask = (id) => async (dispatch)=>{

    try {
        const res= await axios.delete(`/tasks/delete/${id}`)
        dispatch(gettasks())
    } catch (error) {
        console.log(error)

    }
}

// update a certain task 
export const edittask=(id,updatedtask)=> async (dispatch)=>{
    try {
        const res= await axios.put(`/tasks/update/${id}`, {taskname:updatedtask })
        dispatch(gettasks())
    } catch (error) {
        console.log(error)
    }
}