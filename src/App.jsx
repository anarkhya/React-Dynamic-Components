import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminConnection from "./pages/AdminConnection";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <div
      className="bg-primary"
      style={{ backgroundImage: "url(/assets/images/grid.png)" }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/:pages" element={<Pages />} />
          <Route path="/testtest" element={<AdminConnection />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
