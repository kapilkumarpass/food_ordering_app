
import './App.css';
import Button from '@mui/material/Button';
import Signin from './components/Signin.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
function App() {
  return (
    <Router>
    <Routes>
      <Route 
        path="/" 
        element={<Signin />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
     
  </Routes>
  </Router>
  );
}

export default App;
