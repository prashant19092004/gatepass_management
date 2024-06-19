import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Rejected_requests = () => {

  const token = localStorage.getItem("token");
  const [requests, setRequests] = useState();
//   const [user, setUser] = useState();

  async function fetchingHistory(){
    try{
      await axios.get("http://localhost:9000/admin/rejected", {
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      .then((res) => {
        // console.log(res.data);
        // setUser(res.data);
        setRequests(res.data);
      })
    }catch(err){
      console.log(err);
    }
  }


  
  // console.log(userHistory)
  useEffect(() => {
    fetchingHistory();
  }, [requests]);
  return (
    <div>
        
    <div className="px-6 pb-8">
      <h1 className='text-3xl text-center mb-5 font-semibold'>Approved Requests</h1>
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
          
          {
            requests?.map((item) => {
              return (
                <div className="bg-white rounded-3xl p-8 mb-5 ">
            <section className="card w-full" >
              <header className="card-header flex flex-wrap items-center justify-between">
                <div>
                  <div className="flex gap-3">
                    <div className="mr-2 h-12 w-12 rounded-full overflow-hidden"><img className='h-full w-full' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="40" alt=""/></div>
                    <div>
                      <h2 className="font-semibold text-black text-md">{item.user.name}</h2>
                      <p className="font-regular text-gray-500 text-sm">Super 60</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="flex gap-4">
                    <li>{item.status}</li>  
                  </ul>
                </div>
              </header>

              <div className='mt-5'>
                <div className='flex'>
                <p className='min-w-20'>Name</p>    
                <p> : {item.user.name}</p>
                </div>
                <div className='flex'>
                <p className='min-w-20'>A No.    </p>    
                <p> : {item.user.admission_no}</p>
                </div>
                <div className='flex'>
                <p className='min-w-20'>Room No. </p>    
                <p> : {item.user.room_no}</p>
                </div>
                <div className='flex'>
                <p className='min-w-20'>Date     </p>    
                <p> : {item.date.split("T")[0]}</p>
                </div>
                <div className='flex'>
                <p className='min-w-20'>Purpose  </p>    
                <p>: {item.purpose}</p>
                </div>
                
              </div>
            </section>
          </div>
              )
            })
          }
      </div>
    </div>
  
    </div>
  )
}

export default Rejected_requests