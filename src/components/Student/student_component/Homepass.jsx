import React, { useState } from 'react'
import axios from 'axios';

const Homepass = () => {

    const token = localStorage.getItem("token");
    console.log(token);

    const [passData, setPassData] = useState({
        passPurpose: "",
        passDate: "",
        passType: "Home Pass",
        email : ""
    })

    function changeHandler(e){
        setPassData({...passData, [e.target.name]: e.target.value});
        console.log(passData);
    }

    async function submitHandler(){
        try{
            await axios.post("http://localhost:9000/student/request/regularpass", passData ,{
                headers: {
                    Authorization : `Bearer ${token}`
                }
            } )
            .then((res) => {
                console.log("Hii")
            })
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div>
        <div class="flex w-full items-center justify-center p-12">
    {/* <!-- Author: FormBold Team --> */}
    <form class="mx-auto p-10 w-[500px] bg-white">
        <div className='w-full'>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                </label>
                <input type="email" onChange={changeHandler} name="email" id="purpose" placeholder="Purpose"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Purpose
                </label>
                <textarea type="text" onChange={changeHandler} name="passPurpose" id="purpose" placeholder="Purpose"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
            </div>
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" onChange={changeHandler} name="passDate" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                
               
                    {/* <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div> */}
                
            

            

            <div>
                <button type='submit' onClick={submitHandler}
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Request Gatepass
                </button>
            </div>
        </div>
    </form>
</div>
    </div>
  )
}

export default Homepass