import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
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
// import { useAuth } from "react-use-auth"

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }


function App() {
  return (
    <div className="App">
      
     <Router>
       <Header />
       <Routes>
         <Route path="/" exact  element={<Home/>} />
         <Route path="login"  element={<Login />}/>
         <Route path="registration"  element={<Registration />}/>
         <Route path="*" exact={true}  element={<PageNotFound/>}/>
        
         <Route path="/dashboard/"  element={<Dashboard />} >
              <Route path="myform" exact  element={<MyForm/>}/>
              <Route path="myform/:id" exact  element={<MyForm/>}/>
              <Route path="table"  element={<UserTable/>}/>
              <Route path="logout"  element={<Logout />}/>
         </Route>
         
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
