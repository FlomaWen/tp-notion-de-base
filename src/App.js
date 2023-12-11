import './App.css';
import Home from './page/Home'
import Contact from './page/Contact';
import Boutique from './page/Boutique';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CgvPage from './page/CgvPage';

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/condition-de-ventes" element={<CgvPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
