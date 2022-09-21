import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Testimonials from './components/testimonials';
import SignUp from './components/sign-up';
import Projects from './components/Projects';
import Community from './components/Community';

function App() {
 
 
  return (
    <>
   <BrowserRouter>  
    <Routes>
     <Route path='/' element={<Main />} />
     <Route path='projects' element={<Projects />} />
     <Route path='community' element={<Community />} />
     <Route path='testimonials' element={<Testimonials/>} />
     <Route path='sign-up' element={<SignUp />} />

    
    </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App;
