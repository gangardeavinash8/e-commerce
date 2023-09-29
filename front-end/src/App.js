
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
// import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
   <div>
   <BrowserRouter>
    <Nav/>
   <Routes>
    <Route element={<PrivateComponent/>}>
    <Route path="/" element={<h1><ProductList/></h1>} />
    <Route path="/add" element={<h1><AddProduct/></h1>} />
    <Route path="/update" element={<h1>Product updating listing tag</h1>} />
    <Route path="/logout" element={<h1>logout tag</h1>} />
    <Route path="/profile" element={<h1>profile tag</h1>} />
    </Route>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element ={<Login/>} />
   </Routes>
    </BrowserRouter>
    <Footer />
   </div>
  );
}

export default App;
