import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Features from './components/features';
import Operations from './components/operations';
import Testimonials from './components/testimonials';
import SignUp from './components/sign-up';

function App() {
 
 
  return (
    <>
   <BrowserRouter>  
    <Routes>
     <Route path='/' element={<Main />} />
     <Route path='features' element={<Features />} />
     <Route path='operations' element={<Operations />} />
     <Route path='testimonials' element={<Testimonials/>} />
     <Route path='sign-up' element={<SignUp />} />

    
    </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App;
