import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useSelector } from 'react-redux';

import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import CustomerLogin from './pages/CustomerLogin/CustomerLogin';
import CustomerSignUp from './pages/CustomerSignUp/CustomerSignUp';
import AboutPage from './pages/AboutPage/AboutPage';
import CustomerHome from './pages/CustomerHome/CustomerHome';

import './App.css';

function App() {

  const menuToggle = useSelector((state) => state.menuPopup.value)

  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-view">
        {menuToggle ? <SidebarMenu /> : null}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<CustomerLogin/>} />
          <Route path="/signup" element={<CustomerSignUp/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/customerHome" element={<CustomerHome />} /> {/* NOTE: Maybe add customer id in URL? */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
