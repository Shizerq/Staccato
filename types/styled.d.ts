import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    green: string;
    background: string;
    foregroundColor: string;
  }
}
