import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects'
import Experience from './pages/Experience/Experience';
import Nav from './components/NAV/Nav';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
