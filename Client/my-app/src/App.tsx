import React from 'react';
import  './css/home.css'; 
import  './css/footer.css'; 
import  './css/header.css'; 
import  './css/welcome.css'; 
import  './css/learning.css'; 
import  './css/detailLearning.css'; 
import  './css/signin.css'; 
import  './css/signup.css'; 
import "toastr/build/toastr.min.css";

// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
// import List from './Admin/categories/List';
import Welcome from './pages/Welcome';
import Learning from './pages/Learning';
import DetailLearning from './pages/DetailLearning';
import Contact from './pages/Contact';
import FileUser from './pages/FileUser';
import User from './pages/User';
// import Login from './Component/user/Login';
import SignUp from './Component/user/SignUp';
import ThongKe from './Component/user/ThongKe';
import ExeQuiz from './pages/ExeQuiz';
import ExeSpeak from './pages/ExeSpeak';
import ExeWriteAndListen from './pages/ExeWriteAndListen';
import Login from './Component/user/Login';
// import Add from './Admin/categories/Add';
import toastr from "toastr";
import Add from './features/Admin/categories/Add';
import Edit from './features/Admin/categories/Edit';
import List from './features/Admin/categories/List';
// import Edit from './Admin/categories/Edit';
function App() {
  return (
    <div >
      <Routes>
        
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='learning' element={<Learning/>} />
          <Route path='detailLearning' element={<DetailLearning/>} />
          <Route path='detailLearning/quiz' element={<ExeQuiz/>}/>
          <Route path='detailLearning/speak' element={<ExeSpeak/>}/>
          <Route path='detailLearning/writeAndListen' element={<ExeWriteAndListen/>}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="fileuser" element={<FileUser />}/>
          <Route path="user" element={<User />}/>
        </Route>


        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="category" />} />
          <Route path="category" >
            <Route index element={<List />} />
            <Route path='add' element={<Add />} />
            <Route path='edit/:id' element={<Edit />} />
          </Route>
        </Route>

        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>

      </Routes>



    </div>
  );
}

export default App;
