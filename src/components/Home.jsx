import React from "react";
import Header from "./Header";

const Home = ({ onlyHeader }) => {
  const homeBackgroungImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg";
  return (
    <div>
      <Header onlyHeader={onlyHeader} />
      <img
        src={homeBackgroungImage}
        alt="homepage_backgroundImage"
        className="brightness-50 absolute -z-10 top-0"
      />
      {!onlyHeader && (
        <div className="flex flex-col items-center justify-center my-52">
          <h1 className="text-white text-[60px] font-extrabold text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-white text-2xl font-semibold">
            Starts at $149.Cancel at anytime
          </p>
          <h3 className="text-white text-lg font-light height leading-10">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Email address"
              className="border border-white  border-2 rounded-sm text-white p-3 cursor-text w-96"
            />
            <button className="text-[16px] text-white font-extrabold  bg-red-700 py-3.5 px-7 rounded-xs cursor-pointer ml-2">
              Get Started →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
