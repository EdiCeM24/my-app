import { useState } from "react";
import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import ChefLogo  from '../pages/images/chef-logo.png';


export default function SignUp() {
  const [ showPassword, setShowPassword ] = useState(false)
  const [ formData, setFormData ] = useState({
    name: '',
    password: '',
  })
  const {email, password } = formData;

  function onSubmit() {
    alert('It was submitted!');
  }
  return (
    <div className="sign-up-container">
      <h2 className="ml-[40%] text-center mt-2 w-60 mb-6 text-2xl bg-slate-600 rounded-sm px-2 py-2">Register here</h2>
      <section className="flex items-center justify-between bg-fuchsia-400 py-12 p-4">
        <div className="sm:ml-[7%] mb-4 -mt-24">
                       <img src={ ChefLogo } className="roundeded-md" alt="Pics"/>
                     </div>
                    <form className="grid flex-col p-4 w-[65%] mr-8">
                      <Label className="text-lg font-semibold text-slate-600" for="">Full Name:</Label>
                      <input type="text" className="mt-2 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800" placeholder="John Doe Jerry"/>
                      <Label className="text-lg font-semibold text-slate-600">User Name:</Label>
                      <input type="text" className="mt-2 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 " placeholder="e.g. Doemaxy"/>
                      <Label className="text-lg font-semibold text-slate-600">Email:</Label>
                      <input type="email" id="email" name="email" value={email} className="mt-2 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 " placeholder="johndoe02@gmail.com"/>
                      
                      <div>
                         <Label className="text-lg font-semibold text-slate-600">Password:</Label>
                         <input type={password ? 'text' : 'password'} id="password" value={password} className="mt-2 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 w-[100%]" placeholder="e.g. Fardinho24_man"/>
                         {showPassword ? (<AiFillEyeInvisible className="absolute right-3 top-3 text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
                         ):(
                           <AiFillEye className="absolute z-10 right-3 top-3 text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
                         )}
                      </div>

                      <div className="flex text-slate-800 font-semibold px-2 gap-4 mt-2 mb-2">
                         <p>
                           Have an account? <Link to='/login' className="text-blue-800 font-semibold hover:text-blue-950 text-lg transition duration-150 ease-in-out uppercase">Login</Link>
                         </p>
                         <p>
                           Forget password? <Link to='/forgot-password' className="text-blue-800 font-semibold hover:text-blue-950 text-lg transition duration-150 ease-in-out uppercase">Login instead</Link>
                         </p>
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" className="mt-1 border-0 outline-none rounded-full"/>
                        <p>By clicking the box, you have agreed to the terms and conditions.</p>
                      </div>
           
                      <Button type="submit" className="mt-10 text-2xl text-blue-900 font-semibold hover:text-white uppercase" onSubmit={onSubmit} outline gradientDuoTone="purpleToPink">Submit</Button>
                    </form>
                 </section>
    </div>
  )
}
