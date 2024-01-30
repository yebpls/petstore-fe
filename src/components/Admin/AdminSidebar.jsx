import {
  AppstoreAddOutlined,
  HomeOutlined,
  LogoutOutlined,
  ShopOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import storageService from "../../config/storageService";
import { setIsLogin, setRole } from "../../redux/slices/accountSlice";
// import AdminSubPageType from "../../constants/AdminSubPageType";

export default function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    storageService.setAccessToken("");
    storageService.setRole("");
    dispatch(setRole(""));
    dispatch(setIsLogin(false));
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <aside className="flex flex-col top-0 left-0 col-span-3 bg-white h-full border-r">
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <Link
              to={`/admin/`}
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-sky-500 p-6`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Tổng quan
              </span>
            </Link>
          </li>

          {/* Manage stores */}
          <li className="px-5 py-2 bg-sky-500">
            <div className="flex flex-row items-center h-8">
              <div className="text-base tracking-wide text-black font-bold ">
                Quản lý loài & thú cưng
              </div>
            </div>
          </li>
          <li>
            <Link
              to={`/admin/species`}
              className={` relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-sky-500 p-6`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Quản lí loài
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/pets`}
              className={` "font-bold  hover:bg-sky-100" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-sky-500 p-6`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Quản lí thú cưng
              </span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => onLogout()}
              className={`w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-sky-500 p-6`}
            >
              <span className="ml-2 text-sm tracking-wide truncate">
                Đăng xuất
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
