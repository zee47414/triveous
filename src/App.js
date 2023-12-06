import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/signin' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>

          {/* 
     <Login />
     <SignUp /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
