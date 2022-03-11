import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import MyForm from './Component/MyForm';
import PageNotFound from './Component/PageNotFound';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './Component/UserTabel';

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Routes>
         <Route path="/" exact  element={<Home/>}/>
         <Route path="/myform" exact  element={<MyForm/>}/>
         <Route path="/myform/:id" exact  element={<MyForm/>}/>
         <Route path="/table"  element={<UserTable/>}/>
         <Route path="*" exact={true}  element={<PageNotFound/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
