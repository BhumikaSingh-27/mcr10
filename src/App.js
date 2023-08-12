
import './App.css';
import { Route, Routes } from 'react-router';
import Depart from './pages/Depart/Depart';
import Product from './pages/prod/Product';
import Detail from './pages/Details/Detail';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import New from './pages/New/New';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/depart" element={<Depart />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/product/:Id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
