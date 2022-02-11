import {Card, Container,Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import Add from './components/Add';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';




function App() {


  return (
    <div >

    
<Container>
  <Row >
 <Card >
     <Add/>
 </Card>
 </Row>


 <Row >
 <Card >
     <Routes>
     <Route  path='/'  element={<HomePage/>} />
     </Routes>
     </Card>
 </Row>
</Container>
     

    </div>
  );
}

export default App;
