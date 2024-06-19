import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
    
      const changeHandle = (e) => {
        
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        console.log(loginData);
    };
      const submitHandle = async (e) => {
        console.log(loginData);
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:9000/adminlogin",
            loginData
          )
          .then((res)=> {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
          })

          navigate("/admin")
          toast.success(response.data.message);
        } catch (err) {
          toast.error(err.response.data.message);
        }
      };
    
  return (
    <div class="max-w-md mx-auto">
        <div>
          <h2 class="text-2xl font-semibold">Admin</h2>
        </div>
        <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                    <input onChange={changeHandle} id="email" name="email" value={loginData.email}type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                    <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Address</label>
                </div>
                <div class="relative">
                    <input onChange={changeHandle} autocomplete="off" id="password" name="password" type="password" value={loginData.password} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                    <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div class="relative">
                    <button onClick={submitHandle} class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin