import HomePage from "./layouts/HomePage/HomePage";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import "./App.css";
import Footer from "./layouts/NavbarAndFooter/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
