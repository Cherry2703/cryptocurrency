import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidebar from "./Components/Sidebar"
import Dashboard from "./Pages/Dashboard"
import Assets from './Pages/Assets';

import Organisation from './Pages/Organisation';
import History from './Pages/History';
import Trade from './Pages/Trade';
import Wallet from './Pages/Wallet';

import "./App.css"


const App=()=>{
  return(
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/assets" element={<Assets/>}/>
          <Route path="/organisation" element={<Organisation/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/trade" element={<Trade/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;
