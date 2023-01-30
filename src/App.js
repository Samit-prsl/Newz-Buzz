import './App.css';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import General from './Components/Pages/General';
import Fetchdata from './Components/Fetchdata';
import Fetchdata2 from './Components/Fetchdata2'
import Fetchdata3 from './Components/Fetchdata3'
import Fetchdata4 from './Components/Fetchdata4'
function App() {
  return (
   
   
   <Router>
    <div className='container-fluid'>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<General/>}/>
      <Route  path='/National' element={<Fetchdata cat = 'National'/>}/>
       <Route  path='/International' element={<Fetchdata2 cat = 'International'/>}/>
      <Route  path='/Sports' element={<Fetchdata3 cat ='Sports'/>}/>
      <Route  path='/Entertainment' element={<Fetchdata4 cat = 'Entertainment'/>}/> 

    
    </Routes>
    <Footer/>
    </div>
   </Router>
   
   
  );
}

export default App;
