import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import CustomerLogin from './pages/CustomerLogin/CustomerLogin';
import CustomerSignUp from './pages/CustomerSignUp/CustomerSignUp';
import AboutPage from './pages/AboutPage/AboutPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-view">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<CustomerLogin/>} />
          <Route path="/signup" element={<CustomerSignUp/>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
