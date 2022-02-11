

import { useSelector } from "react-redux"
import Taske from "./Taske"
import { useDispatch } from 'react-redux';
import { gettasks } from "../redux/actions/Actions";
import { useEffect } from 'react';

 
// to get all the tasks you have from the database 
const List =()=>{

    useEffect(() =>{
        dispatch(gettasks())
     },[])

    const tasks= useSelector(state=> state.tasks)
    const dispatch=useDispatch()

   return (
        <div>
    {   tasks.map( task   =>    <Taske   task ={task }   key={task._id}  > </Taske>)}
        </div>
    )
}
export default List
