
import './style/style.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login'
import Dashboard from './page/dashboard';
import Profile from './page/profile';
import Pricing from './page/pricing'
import Support from './page/support';
import Payment from './page/payment';
import Alarms from './page/sub/alarms';
import Explor from './page/sub/explor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='alarms' element={<Alarms/>}></Route>
          <Route path='explor' element={<Explor/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='pricing' element={<Pricing/>}></Route>
          <Route path='support' element={<Support/>}></Route>
          <Route path='payment' element={<Payment/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
