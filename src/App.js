
import './App.css';
import Button from '@mui/material/Button';
import Signin from './components/Signin.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup.js'
import Temp from './components/Temp';
import Home from './components/Home.js'
import Userhome from './components/Userhome';
function App() {
  return (
    <Router>
    <Routes>
      <Route 
        path="/signin" 
        element={<Signin />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/"
        element={<Home />}
      />
       <Route
        path="/successpage"
        element={<Temp />}
      />
      <Route path="/userhome"
      element={<Userhome/>}
      />
     
  </Routes>
  </Router>
  );
}

export default App;
