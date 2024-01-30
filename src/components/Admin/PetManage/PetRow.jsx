import React from "react";

function PetRow({ pet }) {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{pet.id}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.breed}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.listPrice}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.country}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.uploadDate}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.age}</td>
      <td className="whitespace-nowrap px-6 py-4">{pet.gender}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="w-20 h-20">
          <img
            src={`/images/${pet.mainImage}`}
            alt=""
            className="w-full h-full"
          />
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {pet.isSold ? "Đã bán" : "Chưa bán"}
      </td>
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

export default PetRow;
