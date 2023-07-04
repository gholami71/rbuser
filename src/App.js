
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/sub/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
