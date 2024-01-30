import React from "react";
import SpeciesTable from "../components/Admin/SpecieManage/SpeciesTable";

function AdminSpecies() {
  return (
    <div className="mx-auto py-4 px-10">
      <h1 className="text-lg font-bold">Quản lí các loài</h1>
      <SpeciesTable />
    </div>
  );
}

export default AdminSpecies;
