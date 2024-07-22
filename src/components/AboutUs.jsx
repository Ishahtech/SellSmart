import React from "react";
import sittingSell from "../images/dashboard.png";

function AboutUs() {
  return (
    <>
      <div>
        <h2 className=" flex justify-center align-center m-5 text-3xl text-blue-600 font-bold ">
          How SellSmart Works
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 md:p-12">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={sittingSell}
            alt="image"
            className="w-2/3 h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 marker:selection:">1</p>
            <h3>Signup</h3>
            <p className="mb-4 justify-center items-center text-gray-700 opacity-90">
              provide essential details like <br />
              your name,email address <br /> and a secure password.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <p className="mb-2 marker:selection:">2</p>
            <h3>Add New Products/Sales</h3>
            <p className="mb-4 justify-center items-center text-gray-700 opacity-90">
              Manage your Products and Sales by <br /> entering essential details <br /> about your products and sales
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <p className="mb-2 marker:selection:">3</p>
            <h3>Submit</h3>
            <p className="mb-4 justify-center items-center text-gray-700 opacity-90">
              Submit the entered to <br /> log your products and sales into <br /> the systems
            </p>
          </div>
    
         
        </div>
      </div>
    </>
  );
}

export default AboutUs;
