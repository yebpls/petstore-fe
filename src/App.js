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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
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
