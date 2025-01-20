import { useState } from "react";
import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import ChefLogo  from '../pages/images/chef-logo.png';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [ showPassword, setShowPassword ] = useState(false)
  const [ formData, setFormData ] = useState({
    name: '',
    username: '',
    email : '',
    password: '',
  })
  const {name, username, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault()
    alert('The form was submitted!');

    navigate('login')
  }
  return (
    <div className="sign-up-container sm:grid sm:flex-col">
      <h2 className="ml-[33%] text-center mt-2 w-60 mb-6 text-2xl bg-slate-600 text-white font-semibold hover:text-fuchsia-500 cursor-pointer rounded-sm px-2 py-2">Register here</h2>
      <section className="sign-up-content flex sm:block sm:flex-col px-40 sm:py-32  items-center justify-between bg-fuchsia-400 py-12 p-4">
        <div className="sm:ml-[7%] mb-4 -mt-24">
          <img src={ ChefLogo } className="roundeded-md" alt="Pics"/>
        </div>
        <form onSubmit={onSubmit} className="grid sm:px-20 -ml-6 flex-col p-4 w-[65%] mr-8 relative">
            <Label className="text-lg sm:p-4 sm:mb-2 font-semibold text-slate-600">Full Name:</Label>
            <input type="text" id="name" name="name" value={name} onChange={onChange} className="mt-2 sm:px-20 sm:-ml-6 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800" placeholder="John Doe Jerry"/>
            <Label className="text-lg sm:p-4 sm:mb-2 font-semibold text-slate-600">Username:</Label>
            <input type="text" id="username" name="username" value={username} onChange={onChange} className="mt-2 sm:px-20 sm:-ml-6 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 " placeholder="e.g. Doemaxy"/>
            <Label className="text-lg sm:p-4 sm:mb-2 font-semibold text-slate-600 mt-3">Email:</Label>
            <input type="email" id="email" name="email" value={email} onChange={onChange} className="mt-2 sm:px-20 sm:-ml-6 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 " placeholder="johndoe02@gmail.com"/>
                      
            <div className="mt-4 relative">
              <Label className="text-lg  py-6 font-semibold text-slate-600">Password:</Label>
                <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={onChange} className="mt-2 sm:px-20 -ml-6 text-slate-800 text-xl mb-2 rounded-md border-blue-800 outline-blue-800 w-[100%]" placeholder="e.g. Fardinho24_man"/>
                {showPassword ? (<AiFillEyeInvisible className="absolute right-8 sm:mt-[10%] sm:-ml-[6%] mt-[42%] top-3 -ml-[25%]  text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
                ):(
                 <AiFillEye className="absolute right-8 sm:mt-[10%] sm:-ml-[6%] mt-[42%] top-3 -ml-[25%] text-xl text-gray-700 cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
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
           
            <Button type="submit" className="mt-10 text-3xl text-blue-700 font-semibold hover:text-white uppercase" outline gradientDuoTone="purpleToPink">Submit</Button>
        </form>
      </section>
    </div>
  )
}
