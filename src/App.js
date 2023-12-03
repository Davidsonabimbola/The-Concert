import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Headliner from './components/Headliner';
import  React,{useState} from 'react'

function App() {
  const [bgopen,setBgopen] = useState(false)
  
  const bgChange = ()=>{
    setBgopen(!bgopen)
}
  return (
    <div >
      <Navbar/>
      <Hero setBgopen = {bgChange} />
      <Headliner bgopen ={bgopen} />
    </div>
  );
}

export default App;
