import React from "react";

const Header = ({ onlyHeader }) => {
  const netFlixLogo =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
  return (
    <div className="flex justify-between items-center">
      <img src={netFlixLogo} alt="netflix_logo" className="w-52 ml-10" />
      {!onlyHeader && (
        <button className="text-[16px] text-white bg-red-700 py-0.5 px-4 rounded-xs cursor-pointer mr-10">
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
