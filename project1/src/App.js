import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import Qualifications from './Pages/Qualifications';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
