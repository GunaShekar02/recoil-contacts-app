import React from "react";
import { RecoilRoot } from "recoil";

import Contact from "./components/Details/Details";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div>
          <Sidebar />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
