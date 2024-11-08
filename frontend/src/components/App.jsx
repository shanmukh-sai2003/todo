import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import CreateTask from './CreateTask';
import TaskDetails from './TaskDetails';
import UpdateTask from './UpdateTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }>
          <Route path='' element={ <Main /> }></Route>
          <Route path='/add' element={ <CreateTask /> } />
          <Route path='/task/:taskId' element={ <TaskDetails /> }></Route>
          <Route path='/task/:taskId/update' element={ <UpdateTask /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;