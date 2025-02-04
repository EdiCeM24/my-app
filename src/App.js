
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard  from './pages/Dashboard';
import Main from './pages/Main';
import Footer from './pages/Footer';
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import "./Tabbutton"
import Button from './components/Button';
import Project from './pages/Project';
import Ingredient from './pages/Ingredient';
import ReducerPage from './pages/ReducerPage';
import Task from './pages/Task';
import AddToCart from './components/AddToCart';





function App() {


  return (
    <>
      <div>
        <Router>
              <Header />
              <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/ingredient' element={<Ingredient />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/project' element={<Project />} />
                <Route path='/sign-up' element={<SignUp />}/>
                <Route path='/forgot-password' element={<ForgotPassword />}/>
                <Route path='/button' element={<Button />} /> 
                <Route path='/reducer-page' element={<ReducerPage />}/>
                <Route path='/tasks' element={<Task />} />
                <Route path='/cart' element={<AddToCart/>}/>
              </Routes>
              <Footer/>
        </Router>
      </div> 
    </>
  );
}

export default App;







