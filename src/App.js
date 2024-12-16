
import React from 'react'
import './App.css'
import Login from './Components/Login';
import Signup from './Components/Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Modules/Dashboard';
import Car from './Components/Modules/Car';
import Benj from './Components/Modules/Benj';
import Scooty from './Components/Modules/Scooty';
import Bikedetails from './Components/Details/Bikedetails';
import Scootydaetails from './Components/Details/Scootydaetails';


function App() {
  return (
  
      <Router>
        
        <Routes>
       
          <Route path='/' element={<Login />}/>
         
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard'element={<Dashboard />}/>
          <Route path='/car'element={<Car />}/>
          <Route path='/benj'element={<Benj />}/>
          <Route path='/scooty'element={<Scooty />}/>
          <Route path='/benj/:id'element={<Bikedetails/>}/>
          <Route path='/scooty/:id'element={<Scootydaetails />}/>
          <Route path='/Car/:id'element={<Cardaetails />}/>
         
        </Routes>
      
      </Router>
      

    
  )
}

export default App