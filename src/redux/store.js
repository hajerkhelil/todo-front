
  import { createStore, applyMiddleware, compose } from 'redux';
  import thunk from 'redux-thunk'
import  TaskReducer from './reducers/TaskReducer';

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore( TaskReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));


  export default store 