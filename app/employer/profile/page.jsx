import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-center  items-center pt-20   md:px-10 ">
      <h1 className="font-semibold text-xl">My Profile</h1>
      {/* Logo  */}
      <div className="flex flex-row w-[100%] justify-center items-center cursor-pointer  gap-3 py-5">
        <img src="/person-icon.jpg" alt="" className="w-24 rounded-[50px]" />
        <button className="px-2 py-1 h-[40px] bg-rheinland-red text-white">
          Browse
        </button>
      </div>
      <form action="" className="flex flex-col gap-5 md:gap-8">
        {/* Email & Name  */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 ">
          {/* Employer Name */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Employer Name
            </label>
            <input
              type="text"
              value={"Duoph Technologies"}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
            />
          </div>
          {/* Email  */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              value={"duophtechnologies@gmail.com"}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
            />
          </div>
        </div>
        {/* Ph No & Website */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 ">
          {/* Phone Number*/}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={"+49 43 95339 2634"}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
            />
          </div>
          {/* Website  */}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              Website
            </label>
            <input
              type="text"
              placeholder="Website "
              value={"www.duoph.com"}
              className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
            />
          </div>
        </div>
     
          {/* About*/}
          <div className="flex flex-col justify-start">
            <label htmlFor="" className="font-semibold">
              About
            </label>
            <textarea
              rows="10"
              cols="50"
              placeholder="Write about your company..."
              className="border-2 w-[380px] md:w-[760px] outline-none rounded-md px-2 py-2"
            />
          </div>
        
        {/* Location  */}

        <div className="flex flex-col justify-start">
          <label htmlFor="" className="font-semibold">
            Location
          </label>
          <input
            type="text"
            value={"Berlin"}
            className="border-2 w-[380px] h-[50px] outline-none rounded-md px-2"
          />
        </div>
        <div className="py-5">
          <button className="px-2 w-[100px] py-1 h-[50px] bg-rheinland-red text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
