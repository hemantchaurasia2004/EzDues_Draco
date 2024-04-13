import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Studentlogin from './pages/Studentlogin';
import Adminlogin from './pages/Adminlogin';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Studentlogin />} />
          <Route path="/Admin" element={<Adminlogin />} />
        </Routes>
    </div>
  );
}

export default App;
