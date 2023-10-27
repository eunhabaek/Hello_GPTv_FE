import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Search from './pages/Search';
import Navbar from './pages/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mypage' element={<><Navbar /><Mypage /></>} />
        <Route path='/main' element={<><Navbar /><Main /></>} />
        <Route path='/search' element={<><Navbar /><Search /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
