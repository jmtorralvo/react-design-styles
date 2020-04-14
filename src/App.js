import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faEye } from "@fortawesome/free-solid-svg-icons";

import { Card } from "./components";


library.add( fab,faCheckSquare, faCoffee,faEye);

const App = () => {
  return (
    <div className="App">
      <Card />
    </div>
  );
};

export default App;
