import './App.css';

import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePageHandler/HomePage';
import { Login } from './pages/LoginPageHandler/Login';
import { ProtectedRoute } from './utils/ProtectedRoute';
import ResponsiveAppBar from './components/NavbarHandler/Navbar';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
