import React from "react";
import { Create } from "./components/pages/Create";
import { Index } from "./components/pages/Index";
import { Permissions } from "./components/pages/Permissions";

function App() {
  return (
    <div className="App">
      <h1>n5now Permissions</h1>
      <Index/>
      <Permissions/>
      <Create />
    </div>

  );
}

export default App;
