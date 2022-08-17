import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/orderreview" element={<OrderReview></OrderReview>} />
      </Routes>
    </div>
  );
}

export default App;
