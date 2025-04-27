import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ThirdPane from "./components/ThirdPane";
import "./App.css";

function App() {
  const [showThirdPane, setShowThirdPane] = useState(false);

  return (
    <div className="app-root">
      <Header />
      <div className="app-body">
        <Sidebar onOpenThirdPane={() => setShowThirdPane(true)} />
        <MainContent />
        {showThirdPane && <ThirdPane onClose={() => setShowThirdPane(false)} />}
      </div>
    </div>
  );
}

export default App;
