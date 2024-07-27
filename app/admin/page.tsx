"use client"
import AdminSliderMenu from "@/components/SliderMenus/adminSliderMenu";

const AdminPage = () => {
  return (
    <div className="pt-[95px] flex flex-col items-center justify-center">
      <h1>Admin Panel</h1>
      <AdminSliderMenu/>
    </div>
  );
};
export default AdminPage;
