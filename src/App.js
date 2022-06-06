import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/' element={<RequireAuth><Home/></RequireAuth>} />
     <Route path='/login' element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
