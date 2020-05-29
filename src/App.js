import React from "react";
import { RecoilRoot } from "recoil";

import Details from "./components/Details/Details";
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
          <Details />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
