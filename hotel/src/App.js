
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoomBoard from './Tables/Roomboard';
import DashBoard from './Home/Dashboard';
import GuestBoard from './Tables/Guestboard';
import HomePage from './Components/Home';
import Navbar1 from './Home/Navbar';
import Login from './Forms/LoginPage';
import ReservationForm from './Forms/Reservation';
import Register from './Forms/Register';
import AdminBoard from './Tables/Adminboard';
import GuestRegister from './Forms/GuestRegister';
import ReservationBoard from './Tables/ReservationBoard';
import About from './Home/About'; 
import ContactData from './Tables/ContactData';


function App() {
  return (
    <div className="App">
      {/* <Reservation/> */}
       <BrowserRouter>
      <Routes>
       
       <Route path='/' element={<HomePage/>  }/>
       <Route path='/Navbar1' element={<Navbar1/>}/>
       <Route path='DashBoard' element={<DashBoard/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Login' element={<Login/>}/>
       <Route path='ReservationForm' element={<ReservationForm/>}/>
       <Route path='/register' element={<Register />} />
       <Route path='/AdminBoard' element={<AdminBoard />} />
       <Route path='/RoomBoard' element={<RoomBoard />} />
       <Route path='/GuestBoard' element={<GuestBoard />} />
       <Route path='/GuestRegister' element={<GuestRegister />}/>
       <Route path='/ReservationBoard' element={<ReservationBoard />}/>
       <Route path='/ContactData' element={<ContactData/>}/>
       
      </Routes>
      
      </BrowserRouter>
    
   
       
      
    </div>
  );
}

export default App;
