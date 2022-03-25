import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Component/Header';
import MyForm from './Component/MyForm';
import PageNotFound from './Component/PageNotFound';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './Component/UserTabel';
import Footer from './Component/Footer';
import Logout from './Component/Logout';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Dashboard from './Component/Dashboard';
import { useSelector } from 'react-redux';
import React from 'react';




function App() {
  const getToken = useSelector((state)=>state.AdminReducer.isLogin)
  console.log("Token",getToken);
  
  return (
    <div className="App">   
     <Router>
       <Header />
       <Routes>
         {
           getToken ? 
           <>
           <Route path="/dashboard/"  element={<Dashboard />} >
              <Route path="myform" exact  element={<MyForm/>}/>
              <Route path="myform/:id" exact  element={<MyForm/>}/>
              <Route path="table"  element={<UserTable/>}/>
          </Route> 
            </>
         
         :<>
           <Route  path="/" exact  element={<Home/>} />
           <Route  path="login" exact element={<Login />}/>
           <Route  path="registration" exact  element={<Registration />}/>
           <Route path="*" exact={true}  element={<PageNotFound/>}/>
         </>
       }
       </Routes>
  
       {/* <Footer /> */}
     </Router>
    </div>
  );
}

export default App;
