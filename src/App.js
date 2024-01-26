import Header from './components/Header';
import Home from './screen/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './screen/LogIn';
import MyOrders from './screen/MyOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/login' element={<LogIn /> }/>
        <Route path='/myorders' element={<MyOrders/> }/>
      </Routes>
      </BrowserRouter>

{/* <Home /> */}
    </div>
  );
}

export default App;
