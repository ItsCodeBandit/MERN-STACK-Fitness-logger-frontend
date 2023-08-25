import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContexttProvider } from './Context/WorkoutContextt' // i accidently messed something up by clicking some option that i do not remember what it said.
import { AuthContextProvider } from './Context/AuthContext'
// so the file naming for 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <AuthContextProvider>
      <WorkoutsContexttProvider>
           <App />
      </WorkoutsContexttProvider> 
  </AuthContextProvider>
  </React.StrictMode>
);
