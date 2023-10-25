import './App.css';
import UserList from './page/UserList';
import Home from './page/Home';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home />}/>

      <Route path='/users' element={<UserList />}/>

     </Routes>
    </div>
  );  
}

export default App;
