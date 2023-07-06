
import './style/style.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login'
import Dashboard from './page/dashboard';
import Profile from './page/profile';
import Alarms from './page/sub/alarms';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='alarms' element={<Alarms/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
