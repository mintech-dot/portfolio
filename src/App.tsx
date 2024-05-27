import { Outlet } from "react-router-dom";
import Navbar from "./components/partials/Nabvar";
import Footer from "./components/partials/Footer";
import "./index.css";
function App() {
  return (
    <div className="font-heebo">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
