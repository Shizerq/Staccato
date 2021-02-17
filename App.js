import React from "react";

import Theme from "./theme";
import Tuner from "./screens/Tuner";

const App: () => React$Node = () => {
  return (
    <Theme>
      <Tuner />
    </Theme>
  );
};

export default App;
