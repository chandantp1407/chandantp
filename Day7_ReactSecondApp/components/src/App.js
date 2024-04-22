
import './App.css';
import Accordions from './components/Accordian';
 
import BasicExample from './components/BasicExample';
import Cards from './components/Cards';
import Navbars from './components/Navbar';

function App() {
  return (
    <div >
      <BasicExample/>
       {/* <AllCollapseExample/> */}

      <Accordions/>
      <Navbars/>
      <Cards/>
    </div>
  );
}

export default App;
