import React, { Component } from 'react'
import Image from "next/image";
 

type LoginLayaoutProps = {
    children: React.ReactNode; // 👈️ type children
  };
  
  export const LoginLayaout = (props: LoginLayaoutProps) => {
    return (

    <div className=" bg-cover  border-black h-screen w-screen bg-[url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg')] ">
        <div className="content px-8 py-6">
          <nav className="flex items-center justify-between">
              <h2 className="text-gray-200 font-bold text-2xl ">Sea</h2>
              <div className="auth flex items-center">
                  <button className="bg-transparent text-gray-200  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                  <button className="bg-gray-900 text-gray-200  py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">Sign up for free</button>
              </div>
          </nav>
                {/* <div className="flex items-baseline justify-end px-4 mb-6"> */}
                    <div className="body mt-16 mx-8 ">
                        <div className="md:flex items-center justify-between">
                                <div className="w-full md:w-1/2 mr-auto "> {/* text shadow*/}
                                    <h1 className="text-4xl font-bold text-white tracking-wide">Brand</h1>
                                    <h2 className=" text-2xl font-bold text-white tracking-wide">Welcome <span className="text-gray-800"> Aboard</span></h2>
                                    <p className="text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <span className="text-white">Create New Account?<a href="#" className="text-gray-900 text-lg ml-2 font-bold">Sign Up</a></span>
                                </div>
                        {props.children}
                        </div>
                    </div>
                {/* </div> */}
        </div>
    </div>
    )
  };

