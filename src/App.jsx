import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/:pages" element={<Pages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
