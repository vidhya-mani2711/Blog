import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './common/nav';
import Home from './components/home';
import Blog from './components/blog';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (


    <div className=' px-8'>
     

      <BrowserRouter>
        <Routes>
          <Route path='/nav' element={<Nav/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>


  );
}
export default App;
