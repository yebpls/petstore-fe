import React, { useState } from "react";
import PetTable from "../components/Admin/PetManage/PetTable";
import PetForm from "../components/Admin/PetManage/PetForm";

function AdminPet() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className=" flex flex-col items-center py-4 px-10 w-full">
      <h1 className="text-lg font-bold mx-auto">Quản lí thú cưng</h1>
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        onClick={() => setShowModal(true)}
        className="flex justify-end px-2 py-1 bg-green-400 rounded-md"
      >
        Thêm mới
      </button>
      {showModal ? (
        <PetForm showModal={showModal} onShowModal={handleShowModal} />
      ) : null}
      <PetTable />
    </div>
  );
}

export default AdminPet;
