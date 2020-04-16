import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faEye } from "@fortawesome/free-solid-svg-icons";

import { CardStyledComponents } from "./components";


library.add( fab,faCheckSquare, faCoffee,faEye);

const App = () => {
  return (
    <div className="App">
      <CardStyledComponents />
    </div>
  );
};

export default App;
