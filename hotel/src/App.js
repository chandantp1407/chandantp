

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import RoomBoard from './Components/Roomboard';
import DashBoard from './Components/Dashboard';
 import GuestBoard from './Components/Guestboard';
 import HomePage from './Components/Home';
import Navbar1 from './Components/Navbar';
import Login from './Components/LoginPage';
import ReservationForm from './Components/Reservation';
import Register from './Components/Register';
import AdminBoard from './Components/AdminBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
       <Route path='/' element={<HomePage/>  }/>
       <Route path='/Navbar1' element={<Navbar1/>}/>
       <Route path='DashBoard' element={<DashBoard/>}/>
       <Route path='Login' element={<Login/>}/>
       <Route path='ReservationForm' element={<ReservationForm/>}/>
       <Route path='/register' element={<Register />} />
       <Route path='/AdminBoard' element={<AdminBoard />} />
       <Route path='/RoomBoard' element={<RoomBoard />} />
       <Route path='/GuestBoard' element={<GuestBoard />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
