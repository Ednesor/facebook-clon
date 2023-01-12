import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
