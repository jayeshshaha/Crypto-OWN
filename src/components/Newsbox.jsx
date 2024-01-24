import React from "react";

const Newsbox = () => {
  return (
    <div className="p-3  bg-black text-white rounded-xl">
      <div className="max-w-[1240px] h-auto grid md:grid-cols-2 gap-2  p-2 mx-auto">
        <div className="flex flex-col">
          <p className="p-1 text-xl md:text-2xl font-bold">Stay on top of crypto. All the time, any time.</p>
          <p className="p-1 text-cGray">Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from Crypto Spot.</p>
        </div>
        <div className="p-1">
          <div className="flex p-1">
            <input type="text" placeholder="Enter your e-mail address" className="p-1  w-[70%] md:w-[50%] border rounded-sm" />
            <button className="bg-cBlue text-white p-1 ml-1 rounded-md">Subscribe</button>
          </div>
          <p className="p-1">We care about the protection of your data. Read our <span className="text-cGreen underline">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsbox;
