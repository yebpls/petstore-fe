import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminSpecies from "./pages/AdminSpecies";
import AdminPet from "./pages/AdminPet";
import PetDetail from "./components/PetList/PetDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import storageService from "./config/storageService";
import { jwtDecode } from "jwt-decode";
import { setId, setIsLogin, setRole } from "./redux/slices/accountSlice";
import AllPet from "./components/PetList/AllPet/AllPet";
import AllBySpecies from "./components/PetList/AllBySpecies/AllBySpecies";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    var token = storageService.getAccessToken();
    if (token) {
      token = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > token.exp) {
        storageService.removeAccessToken();
        dispatch(setIsLogin(false));
        dispatch(setRole(""));
        dispatch(setId(null));
      }
      dispatch(setId(token.id));
      dispatch(setRole(token.role));
      dispatch(setIsLogin(true));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/pets" element={<AllPet />} />
          <Route path="/pets/species/:name" element={<AllBySpecies />} />
          <Route path="/pets/pet-detail/:id" element={<PetDetail />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="species" element={<AdminSpecies />} />
          <Route path="pets" element={<AdminPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
