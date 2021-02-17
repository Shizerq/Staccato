import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

export const Container = styled.ImageBackground`
  width: ${Dimensions.get("window").width}px;
  height: 175px;

  position: absolute;
  bottom: 10%;
  align-items: center;
`;

export const IndicatorContainer = styled(Animated.View)`
  z-index: 1;

  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.View`
  height: 215px;
  align-self: center;
  width: 5px;
  background: ${({ color }) => color};
`;

export const Frequency = styled.Text`
  margin-top: 20px;

  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: 700;
`;
