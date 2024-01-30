import React from "react";

function SpeciesRow({ specie }) {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{specie.id}</td>
      <td className="whitespace-nowrap px-6 py-4">{specie.name}</td>

      <td className="whitespace-nowrap px-6 py-4 flex justify-between">
        <button className="text-white px-2 py-1 rounded-md bg-blue-500">
          Sửa
        </button>
        <button className="text-white px-2 py-1 rounded-md bg-red-500">
          Xoá
        </button>
      </td>
    </tr>
  );
}

export default SpeciesRow;
