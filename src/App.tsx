import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import LandingPage from "./pages/LandingPage";
import Statistics from "./pages/Statistics";
import AppSidebar from "@/components/AppSidebar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="absolute top-0 left-0 min-h-screen w-full pb-24 sm:left-64 sm:w-[calc(100%-16rem)] sm:pb-0">
        <AppSidebar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stats" element={<Statistics />} />
        </Routes>

        <Toaster richColors position="bottom-center" />
      </div>
    </div>
  );
}

export default App;
