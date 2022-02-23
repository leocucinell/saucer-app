import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Landing from './pages/Landing/Landing';
import CustomerLogin from './pages/CustomerLogin/CustomerLogin';
import CustomerSignUp from './pages/CustomerSignUp/CustomerSignUp';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<CustomerLogin/>} />
        <Route path="/signup" element={<CustomerSignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
