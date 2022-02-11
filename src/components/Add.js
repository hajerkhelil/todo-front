

import React , { useState}from 'react';
import {Form, Button} from "react-bootstrap"
import { addtask } from '../redux/actions/Actions';
import { useDispatch} from 'react-redux';

// this function will allow you to add new tasks 
function Add() {
    const [taskname,setTaskname]= useState('')

    // you are capable to dispatch actions  
    const dispatch=  useDispatch()
  return <div>
<Form>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Task</Form.Label>

    <Form.Control  onChange={(e)=> setTaskname (e.target.value)} value={taskname}  placeholder="Type New Task" />
    <Form.Text className="text-muted">
      Please enter a task.
    </Form.Text>
  </Form.Group> 
  <Button onClick={(e)=>{e.preventDefault(); dispatch(addtask({taskname} )); setTaskname("")}}
   variant="primary" >
    ADD
  </Button>
</Form>

  </div>;
}

export default Add;
