import React from "react";
import { StatusBar } from "react-native";

import Tuner from "./screens/Tuner";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tuner />
    </>
  );
};

export default App;
