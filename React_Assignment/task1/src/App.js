
import './App.css';
// import FormScreen from './components/FormScreen';
// import PortfolioPage from './components/PortfolioPage';
import Food from './components/Food'
import Card from './components/Card'
import About from './components/About';
import Portfolio from './components/Portfolio';
import ClientAlbum from './components/ClientAlbum'

function App() {
  return (
    <div >
      {/* <PortfolioPage/>
      <FormScreen/> */}
      <Food/>
      <Card/>
      <Portfolio/>
      <About/>
      <ClientAlbum/>
    </div>
  );
}

export default App;
