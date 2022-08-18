import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Grandpa from './components/Grandpa/Grandpa';
function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/orderreview" element={<OrderReview></OrderReview>} />
        <Route path="/grandpa" element={<Grandpa></Grandpa>} />
      </Routes>
    </div>
  );
}

export default App;
