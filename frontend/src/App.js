import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hookss/useAuthContext';
// for easy login just use either of these account or make another if lazy or further testing. 

/*
  user: Aloy35@gmail.com
  pass: Aloy12345!   
|||||||||||||||||||||||||||
  user: Luigi1234@gmail.dev 
  pass: ABCabc123!
*/

// pages & components 
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Navbar from './components/Navbar';


function App() {
const { user } = useAuthContext()


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>

          <Route
          path="/"
          element={user ? <Home/> : <Navigate to= "/login" /> }
          /> 


          <Route
          path="/login"
          element={!user ? <Login/> : <Navigate to= "/" />}
          /> 

          <Route
          path="/signup"
          element={!user ? <Signup/> : <Navigate to = "/" />}
          />

          
        </Routes>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


