import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <h1>My Profile</h1>
      {/* Logo  */}

      <div className="flex flex-row w-[100%]  cursor-pointer  gap-3 ">
        <img src="/person-icon.jpg" alt="" className="w-16 rounded-[50px]" />
        <button className="px-2 py-1  bg-rheinland-red text-white">
          Browse
        </button>
      </div>
      <form action="" className="flex flex-col ">
        <label htmlFor="">Employer Name</label>
        <input
          type="text"
          value={"Duoph Technologies"}
          className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
        />
      </form>
    </div>
  );
};

export default page;
