import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import AddItems from './components/Items/AddItems';
import MyItems from './components/Items/MyItems';
import ManageItems from './components/Items/ManageItems';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems/>
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
