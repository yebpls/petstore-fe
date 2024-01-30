import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPet } from "../../../redux/slices/petSlice";
import PetRow from "./PetRow";

function PetTable() {
  const { petList } = useSelector((state) => state.petReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPet());
  }, [dispatch]);

  return (
    <div className="flex flex-col overflow-x-auto w-full">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Breed
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Pet Country
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Upload Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Main Image
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {petList &&
                  petList.map((pet) => <PetRow key={pet.id} pet={pet} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetTable;
