import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpecies } from "../../../redux/slices/petSlice";
import SpeciesRow from "./SpeciesRow";

function SpeciesTable() {
  const { species } = useSelector((state) => state.petReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpecies());
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
                    Species
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {species &&
                  species.map((specie) => (
                    <SpeciesRow key={specie.id} specie={specie} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciesTable;
