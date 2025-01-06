import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import ChefLogo  from '../pages/images/chef-logo.png';


export default function Login() {

  const [ showPassword, setShowPassword ] = useState(false)
  const [ formData, setFormData ] = useState({
    name: '',
    password: '',
  })
  const {email, password } = formData;

  function onSubmit() {}

  return (
    <div className="login-container">
        <h2 className="ml-[40%] text-center mt-2 w-60 mb-6 text-2xl bg-slate-600 rounded-sm px-2 py-2">Register here</h2>
      <section className="flex items-center justify-between bg-fuchsia-400 py-12 p-4 mb-20">
          <div className="sm:ml-[7%] mb-4 mt-10">
            <img src={ ChefLogo } className="roundeded-md" alt="Pics"/>
          </div>
         <form className="grid flex-col p-4 w-[65%] mr-8 -mt-10">
          
           <Label className="text-lg font-semibold text-slate-600">User Name:</Label>
           <input type="text" className="mt-2 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 transition duration-150 ease-in-out" placeholder="e.g. Doemaxy"/>
           
           <div className="">
              <Label className="text-lg font-semibold text-slate-600">Password:</Label>
              <input type={password ? 'text' : 'password'} id="password" value={password} className="mt-2 text-slate-800 text-xl w-[100%] mb-2 rounded-md border-blue-800 outline-blue-800 transition duration-150 ease-in-out" placeholder="e.g. Fardinho24_man"/>
              {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-3 text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
              ):(
                <AiFillEye className="absolute right-3 top-3 text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
              )}
           </div>

           <div className="flex text-slate-800 font-semibold px-2 gap-4 mt-2 mb-2">
              <p>
                Don't have an account? <Link to='/sign-up' className="text-blue-800 font-semibold hover:text-blue-950 text-lg transition duration-150 ease-in-out uppercase">Register</Link>
              </p>
              <p>
                Forget password? <Link to='/forgot-password' className="text-blue-800 font-semibold hover:text-blue-950 text-lg transition duration-150 ease-in-out uppercase">Login instead</Link>
              </p>
           </div>
           

           <Button type="submit" className="mt-10 text-2xl text-blue-900 font-semibold hover:text-white uppercase" onSubmit={onSubmit} outline gradientDuoTone="purpleToPink">Submit</Button>
         
         
         </form>
      </section>
    </div>
  )
}
