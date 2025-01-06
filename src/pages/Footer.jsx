import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className="footer">
       <hr></hr>
      <div className="footer-mid">
         <div className="footer-1">
            <h3>Edi_Mars</h3>
            <p>Edi_Mars is a company that is established for programming activity ...</p>
            <Link className="/blog">Reod More</Link>
         </div>
         <div className="footer-1 grid p-2">
            <h3>Navigations</h3>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/forgot-password'>Forgot Password</Link>
            <Link to='/login'>Login</Link>
            <Link to='/'>Main</Link>
            <Link to='/project'>Project</Link>
            <Link to='/sign-up'>SignUp</Link>
         </div>
         <div className="footer-1">
            Footer-3
         </div>
         <div className="footer-1">
            Footer-4
         </div>
         <div className="footer-1">
            Footer-5
         </div>
         <div className="footer-1">
            Footer-6
         </div>
      </div>
      <div className="footer-last">
         All rights reserved @ 2025 &copy; of <a href="www.edimars.com">Edi_Mars</a>
      </div>
    </div>
  )
}
