"use client";
import { useAccount } from "@/context/useAccount";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const AdminSliderMenu = () => {
  const { LogOut } = useAccount();

  const handleLogout = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-rheinland-red text-white px-5 py-2 rounded flex items-center justify-center gap-2"
    >
      <AiOutlineLogout size={20} />
    </button>
  );
};

export default AdminSliderMenu;
