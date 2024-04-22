
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Welcome from './components/Welcome';
import Heading from './components/Heading';
import Counter from './components/Counter';
import DynamicContent from './components/DynamicContent';
import ToggleContent from './components/ToggleContent';
import Parent from './components/Parent';

function App() {
  let name = "Chandan";
  let age = 23;
  let marks = 88;
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Heading marks= {marks}/>
      <Table/>
      <Form/>
      <Welcome name = {name} age = {age}/>
  <Counter/>
  <DynamicContent isLoggedIn={true}/>
  <ToggleContent />
  {/* <Parent message={"Hi"} name={"Chandan"}/> */}
  <Parent/>
    </div>
  );
}

export default App;
