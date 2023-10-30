import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login'
import Register from './components/Register'
import Services from './components/Services';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Review' element={<Review/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
	  <Route path='/login' element={<Login/>} />
	  <Route path='/register' element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
