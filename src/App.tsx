import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import LandingPage from "./pages/LandingPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="absolute top-0 left-0 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Toaster richColors position="bottom-center" />
      </div>
    </div>
  );
}

export default App;
