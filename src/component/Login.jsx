import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [toggleEye, setToggleEye] = useState(false);
    function changeType() {
        setToggleEye(!toggleEye)
        if (toggleEye) {
        document.querySelector("#password").type="password" 
    } else {
            document.querySelector("#password").type="text"  
        }
    }
  return (
      <div className='login'>
          <div className='container w-[92%] bg-white p-4 my-5 costum-md:w-[90%] min-[1500px]:w-[75%] '>
              <div className='border-solid border-2 -border--main-color rounded-md p-4'>
                  <header className='flex justify-center items-center flex-col gap-4'>
                      <img className='w-[80px]' src="../../public/leaderPng.png" alt="" />
                      <h1 className='text-2xl font-medium'>Welcome Back</h1>
                  </header>
                  <form className="send overflow-hidden my-5   flex justify-center flex-col gap-3 items-center  rounded-md " action="">
                      <div className='flex flex-col gap-1'>
                      <label className='ml-1' htmlFor="username"> Email address or Username<span className='-text--main-color '>**</span>  </label>
                      <input className="p-4 w-full min-[1000px]:w-[550px] min-[1000px]:px-4  focus:outline-none rounded-md placeholder:text-sm placeholder:text-[#777] border-solid border-[#333] border-[1px] " type="text" placeholder="Enter your email address or username..." name='username' />
                      </div>
                        
                      <div className='flex flex-col gap-1'>
                          <label className='ml-1' htmlFor="username"> Password<span className='-text--main-color '>**</span></label>
                          <div className='p-4 flex items-center justify-between w-full min-[1000px]:w-[550px] min-[1000px]:px-4  focus:outline-none rounded-md placeholder:text-sm placeholder:text-[#777] border-solid border-[#333] border-[1px] '>   
                          <input className="" type="password" placeholder="Enter your password" name='password' id='password' />
                              <i onClick={() => changeType()} className={`text-[20px] ${toggleEye?"fa-solid fa-eye-slash":"fa-solid fa-eye"}`}></i>
                          </div>
                      </div>
                      <div className="flex justify-between items-center w-full min-[1000px]:w-[550px] ">
                          <div className='flex gap-2 '>
                          <input className=' checked:-bg--main-color' type="checkbox" name="rememberMe" id="rememberMe" />
                          <label htmlFor="rememberMe">Remember Me</label>
                          </div>
                          <a className=' underline transition-all duration-300 hover:-text--main-color' href="#">Forgot Password?</a></div>
                  </form>
                  <button className='loginBtn  w-full min-[1000px]:w-[550px] p-4 rounded-full text-white text-center -bg--main-color my-10 transition-all duration-300 hover:bg-black hover:text-white text-lg mx-auto block '>Login Now</button>
                  <div className='bg-[#ddd] m-auto w-full min-[1000px]:w-[550px] h-[1px] relative before:absolute before:content-["or"] before:py-1 before:px-2 before:top-[calc(50%-18px)] before:left-[calc(50%-16px)] before:bg-white'></div>
                  <Link to={"/singUp"} className='loginBtn  w-full min-[1000px]:w-[550px] p-4 rounded-full  text-center bg-[#c6c4c4] my-10 transition-all text-lg duration-300 hover:bg-black hover:text-white mx-auto block '>Register Now</Link>
              </div>
          </div> 
    </div>
  )
}
