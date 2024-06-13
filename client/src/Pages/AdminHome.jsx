import React from "react";
import Sidebar from "../Components/Sidebar";

const AdminHome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full pt-8 pr-8 pl-6">
        <div className="w-full bg-sky-100 h-fit rounded-2xl p-5 flex flex-col items-center mb-5">
          <h1 className="text-4xl font-semibold mb-8">Hi, Aayush Chatterjee</h1>
          <div className="flex w-full gap-10 mb-4">
            <div className="w-1/2 bg-[#76dbcf] rounded-xl p-8 font-semibold text-2xl flex justify-between">
              <h1>Total No. Of Doctors :</h1>
              <h1>10</h1>
            </div>
            <div className="w-1/2 bg-[#76dbcf] rounded-xl p-8 font-semibold text-2xl flex justify-between">
              <h1>Total No. Of Appointments :</h1>
              <h1>150</h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-sky-100 h-[30rem] rounded-2xl p-5 mb-5">
          <div className="flex bg-white box-border h-60 w-52 rounded-3xl p-4 border-4 shadow-[0_24px_40px_-15px_rgba(0,0,0,0.3)] flex-col mx-14 mb-10">
            <h4 className="text-black font-semibold text-xl mt-2">Patient name</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;