import React from "react";
import { StatusBar, useColorScheme } from "react-native";

import Theme from "./theme";
import Tuner from "./screens/Tuner";

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar
        barStyle={
          useColorScheme() === "dark" ? "light-content" : "dark-content"
        }
      />
      <Theme>
        <Tuner />
      </Theme>
    </>
  );
};

export default App;
