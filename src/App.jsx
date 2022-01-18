import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonAdmin from "./components/ButtonAdmin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/:pages" element={<Pages />} />
      </Routes>
      <div className="mx-auto my-2 flex items-center place-content-center bg-vert rounded w-8 h-8">
        <ButtonAdmin type="newComponent" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
