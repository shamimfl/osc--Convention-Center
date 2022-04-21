import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import SingUp from './Component/SingUp/SingUp';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import RequerAuth from './Component/RequerAuth/RequerAuth';
import ChakOut from './Component/ChakOut/ChakOut';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/service/:did' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/chakout'  element={
         <RequerAuth>
           <ChakOut></ChakOut>
         </RequerAuth>
       }></Route>
       <Route path='/singup' element={<SingUp></SingUp>} />
     </Routes>
    </div>
  );
}

export default App;
