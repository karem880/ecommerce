import { useState } from "react";

function CreditCardForm() {

  return (
<div>
  <div className="relative min-h-screen w-full flex  flex-col md:flex-row bg-black ">
    <div className=" items-center w-full flex  flex-col md:flex-row md:items-start sm:justify-center md:justify-start  ">
      <div className=" w-full md:w-[50%] bg-blue-500 h-full hidden md:flex  items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative" style={{backgroundImage: 'url(https://i.postimg.cc/mrgPMqpP/logo.png)'}}>
        <div className="absolute bg-black  opacity-25 inset-0 z-0" />
        <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
          <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center w-full md:w-[40%] md:justify-left  h-full  p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
        <div className=" w-full space-y-12">
          <div className="lg:text-left text-center">
            <div className="flex items-center justify-center ">
              <div className="bg-black flex flex-col w-full  border border-gray-900 rounded-lg px-8 py-10">
                <form  className="flex flex-col space-y-8 mt-10">
                  <label className="font-bold text-lg text-white ">Account Number</label> 
                  <input type="text" formcontrolname="accnum" placeholder="Account number" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white">Pin</label> 
                  <input type="password" formcontrolname="pin" placeholder="****" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white ">Initial Deposit</label> 
                  <input type="text" formcontrolname="amount" placeholder="Amount in INR" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <button  className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" routerlink="/dashboard">Pay now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div></div></div></div>)

}

export default CreditCardForm;
