import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";
import HomePage from "./layouts/HomePage/HomePage";
import SearchPage from "./layouts/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/search/:keyword" element={<SearchPage />} />
          <Route path="/products" element={<SearchPage />} />
          <Route
            path="/products/category/:categoryName"
            element={<SearchPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
