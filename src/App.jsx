import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import { ThemeProvider } from "./components/Light_Dark";
import Navbar from "./components/Navbar";
import "./styles/theme.css";
import Docs from "./components/Docs";

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
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
