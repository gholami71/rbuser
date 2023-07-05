
import './style/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login'
import Dashboard from './page/dashboard';
import Alarms from './page/sub/alarms';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='alarms' element={<Alarms/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
