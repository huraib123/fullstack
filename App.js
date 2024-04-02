import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Adduser from './user/Adduser';
import Edituser from './user/Edituser'
import Viewuser from './user/Viewuser';
import List from './user/List';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <List/>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/adduser" element={<Adduser/>}/>
        <Route exact path="/edituser/:id" element={<Edituser/>}/>
        <Route exact path="/Viewuser/:id" element={<Viewuser/>}/>
      </Routes>
    

      </Router>
     
    </div>
  );
}

export default App;
