import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Light_Dark";
import LandingPage from "./components/Pages/LandingPage";

import Navbar from "./components/Navbar";
import Docs from "./components/Docs";
import "./styles/theme.css";
import AnalyzingPage from "./components/Pages/AnalyzingPage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs/*" element={<Docs />} />
          </Routes>
          <AnalyzingPage/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
