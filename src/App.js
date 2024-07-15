import Header from './components/Header';
import SignUp from './screen/Signup';
import Home from './screen/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './screen/LogIn';
import MyOrders from './screen/MyOrders';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/login' element={<LogIn /> }/>
        <Route path='/myorders' element={<MyOrders/> }/>
        <Route path='/createuser' element={<SignUp /> }/>

      </Routes>
      </BrowserRouter>

{/* <Home /> */}
    </div>
  );
}

export default App;
