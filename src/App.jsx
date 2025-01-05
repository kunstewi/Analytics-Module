import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyzingPage from "./components/Pages/AnalyzingPage";
import LandingPage from "./components/Pages/LandingPage";
import NotFound from "./components/Pages/NotFound";
import Signin from "./components/Pages/Signin";
import Navbar from "./components/Navbar";
import Docs from "./components/Docs";
import "./styles/theme.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/analyzing" element={<AnalyzingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
