import React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        red: "#F05365",
        green: "#48E5C2",
        background: useColorScheme() === "dark" ? "#000000" : "#FFFFFF",
        foregroundColor: useColorScheme() === "dark" ? "#FFFFFF" : "#000000",
      }}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
