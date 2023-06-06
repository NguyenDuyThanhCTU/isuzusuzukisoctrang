import React, { useState } from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Sidebar from "./Sidebar/Sidebar";
import Time from "./Time/Time";
import EditCar from "./EditCar/EditCar";
import AddCar from "./AddCar/AddCar";
import Video from "./Video/Video";
import AddVideo from "./AddVideo/AddVideo";

const Admin = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [option, SetOption] = useState(false);
  const [loaixe, setLoaixe] = useState("ThungLung");

  return (
    <div className="flex relative ">
      <Sidebar click={SetOption} option={option} />
      {option ? (
        <>
          <Video upload={setIsPost} />
          {isPost && <AddVideo upload={setIsPost} />}
        </>
      ) : (
        <>
          <Time upload={setIsUpload} setLoaixe={setLoaixe} />
          {isUpload && <AddCar upload={setIsUpload} />}
          {isEdit && <EditCar edit={setIsEdit} />}
          <div>
            <Order edit={setIsEdit} loaixe={loaixe} />
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
