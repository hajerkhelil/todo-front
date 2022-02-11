import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { edittask } from '../redux/actions/Actions';

// edite the task you choose 
function  Edit({task}) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const dispatch= useDispatch()

  const handleClick = ()=>{
  dispatch(edittask(task._id, editedtask  )) ;
    handleClose()
  }

    const [editedtask,setEditedtask]= useState(task.taskname)

    return (
      < >
        <Button  variant="outline-info"   onClick={handleShow}>
         edit
        </Button> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
              <input   value ={editedtask}   onChange={(e)=>setEditedtask(e.target.value)}    ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={ handleClick   }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </ >
    );
  }
  
export default Edit 