import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpecies } from "../../../redux/slices/petSlice";
import { petApi } from "../../../apis/petApi";

function PetForm({ showModal, onShowModal }) {
  const { species } = useSelector((state) => state.petReducer);
  const dispatch = useDispatch();
  const [speciesId, setSpeciesId] = useState(null);

  useEffect(() => {
    dispatch(getAllSpecies());
  }, [dispatch]);
  const form = useForm();

  const options = species?.map((specie) => ({
    value: specie.id,
    label: specie.name,
  }));

  const onChange = (value) => {
    setSpeciesId(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = async (data) => {
    const form = new FormData();

    let petDTO = data;

    petDTO = { ...petDTO, speciesId: speciesId };
    form.append("petDTO", petDTO);
    console.log(petDTO);
    let imageUrlList = [petDTO.mainImage];
    form.append("mainImage", petDTO.mainImage);
    form.append("imageUrlList", [petDTO.mainImage]);
    // let params = {};
    // params = {
    //   ...params,
    //   petDTO: petDTO,
    //   mainImage: petDTO.mainImage,
    //   imageUrlList: imageUrlList,
    // };
    try {
      const res = await petApi.addPet(form);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowModal = () => {
    onShowModal(showModal);
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden w-full fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relativo my-6 mx-auto w-full px-10">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Pet Info</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => handleShowModal()}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <div className="w-full flex mb-4">
                <div className="w-1/4">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Breed
                  </label>
                  <input
                    {...register("breed", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4 mx-2">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    List Price
                  </label>
                  <input
                    {...register("listPrice", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4 mx-2">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Sale Percent
                  </label>
                  <input
                    {...register("salePercent", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Tax Included
                  </label>
                  <input
                    {...register("taxIncluded", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
              </div>
              <div className="w-full flex mb-4">
                <div className="w-1/4">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Age
                  </label>
                  <input
                    {...register("age", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4 mx-2">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Gender
                  </label>
                  <input
                    {...register("gender", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4 mx-2">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Color
                  </label>
                  <input
                    {...register("color", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Weight
                  </label>
                  <input
                    {...register("weight", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
              </div>
              <div className="w-full flex mb-4">
                <div className="w-1/3">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Country
                  </label>
                  <input
                    {...register("country", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/3 mx-4">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Description
                  </label>
                  <input
                    {...register("description", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-black text-sm font-extrabold mb-1">
                    Main Image
                  </label>
                  <input
                    {...register("mainImage", { require: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="">Species: </label>
                <Select
                  showSearch
                  placeholder="Select a specie"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={options}
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => handleShowModal()}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              onClick={handleSubmit(onSubmit)}
              // onClick={() => setShowModal(false)}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetForm;
