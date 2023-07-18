import logo from './logo.svg';
import './App.css';
import Sidebar from './Componet/Sidebar';
import MiniDrawer from './Componet/Sidebar';
import LoginEMS from './Registration11/LoginEMS';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Registration11/Registration';
import RequireAuth from './Private/Requauth';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginEMS/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/dashboard" element={<RequireAuth><MiniDrawer/></RequireAuth>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
