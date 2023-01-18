import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
