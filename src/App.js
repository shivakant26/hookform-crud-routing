import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import MyForm from './Component/MyForm';
import PageNotFound from './Component/PageNotFound';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './Component/UserTabel';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import Logout from './Component/Logout';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Routes>
         <Route path="/" exact  element={<Home/>}/>
         <Route path="dashboard/myform" exact  element={<MyForm/>}/>
         <Route path="/myform/:id" exact  element={<MyForm/>}/>
          <Route path="/table"  element={<UserTable/>}/>
          <Route path="/logout"  element={<Logout />}/>
         <Route path="/dashboard/*"  element={<Dashboard />} />
         <Route path="/login"  element={<Login />}/>
         <Route path="/registration"  element={<Registration />}/>
         <Route path="*" exact={true}  element={<PageNotFound/>}/>
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
