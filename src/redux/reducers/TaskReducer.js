import { ADD_TASK, GET_TASKS,  DELETE_TASK,EDIT_TASK  } from "../types/Types";

const inital={
    tasks:[],
    task:{}
}

// A reducer is a function that takes the current state, and an action, and returns the new State 
const  TaskReducer=(state=inital, { type, payload })=>{

    switch(type){

        case GET_TASKS:
            return {...state, tasks: payload.tasks};

        case ADD_TASK:
            return  {...state, task: payload.tasks};
     
       case   DELETE_TASK:
        return { ...state, tasks:    state.tasks.filter(el=>  el._id !== payload  )     } 

        case  EDIT_TASK:
            return   {...state, tasks:  state.tasks.map(el=>  el._id !==payload._id ? el : {...el,  task:payload.newtask  } )}
        
        default:
            return  state
    }
}

export default TaskReducer