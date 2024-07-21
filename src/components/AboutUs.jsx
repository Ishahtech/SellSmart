import React from "react";
import sittingSell from '../images/sittingSell.webp';

function AboutUs() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 md:p-12">
        <div>
            <h2 className="justify-center align-center m-5">How SellSmart Works</h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={sittingSell}
            alt="image"
            className="w-96 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">How SellSmart works</h2>
          <p className="mb-5">1</p>
          <h3>Signup</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula cursus metus, non cursus lorem auctor eu. Sed vel nisl at
            felis pharetra sagittis. Vivamus ac tortor vel nunc facilisis
            sollicitudin. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Phasellus vestibulum, odio a tincidunt luctus, ligula libero
            tincidunt est, quis vehicula lacus elit in dolor. Sed vel convallis
            ipsum. Nullam vehicula nec nisl a dapibus. Nullam pharetra metus nec
            augue fermentum, ac scelerisque massa viverra.
          </p>
          <p>
            Donec facilisis ornare orci, at convallis erat ultricies et. Aliquam
            erat volutpat. Curabitur interdum justo eu lectus facilisis, nec
            elementum libero vehicula.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
