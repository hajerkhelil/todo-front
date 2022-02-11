
import React from 'react';
import { useDispatch } from "react-redux"
import { deletetask } from './../redux/actions/Actions';
import Edit from './Edit';
import {Button, Row} from 'react-bootstrap'


function Taske({task}) {
    const dispatch= useDispatch()
  return <div>
<ul>
     <li  >{task.taskname}</li>
     <Button    variant="outline-danger"
  onClick={()=> dispatch(deletetask(task._id) )  }  >delete</Button>
     <Edit    task={task}   ></Edit>

</ul> 
  </div>;
}
export default Taske;
