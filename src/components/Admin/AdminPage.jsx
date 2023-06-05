import React, { useState } from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Sidebar from "./Sidebar/Sidebar";
import Time from "./Time/Time";
import EditCar from "./EditCar/EditCar";
import AddCar from "./AddCar/AddCar";

const Admin = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex relative ">
      <Sidebar />
      <Time upload={setIsUpload} />
      {isUpload && <AddCar upload={setIsUpload} />}
      {isEdit && <EditCar edit={setIsEdit} />}
      <div>
        <Order edit={setIsEdit} />
      </div>
    </div>
  );
};

export default Admin;
