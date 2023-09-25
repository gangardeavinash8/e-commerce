
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
   <div>
   <BrowserRouter>
    <Nav/>
   <Routes>
    <Route path="/" element={<h1>Product listing tag</h1>} />
    <Route path="/add" element={<h1>Product adding listing tag</h1>} />
    <Route path="/update" element={<h1>Product updating listing tag</h1>} />
    <Route path="/logout" element={<h1>logout tag</h1>} />
    <Route path="/profile" element={<h1>profile tag</h1>} />
    <Route path="/signup" element={<Signup/>} />

   
   </Routes>
    </BrowserRouter>
    <Footer />
   </div>
  );
}

export default App;
