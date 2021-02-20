import * as React from "react";
import { useColorScheme } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useDebounce } from "use-debounce";

import * as Styled from "./index.styled";
import BackgroundDark from "../../assets/meter_dark.png";
import BackgroundLight from "../../assets/meter_light.png";

export const Meter = ({ color, cents, frequency }) => {
  const offset = useSharedValue(0);
  const [debouncedOffset] = useDebounce(offset.value, 100);

  React.useEffect(() => {
    offset.value = cents;
  }, [cents]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      damping: 100,
      useNativeDriver: true,
      velocity: 2,
      transform: [
        {
          translateX: withSpring(debouncedOffset),
        },
      ],
    };
  });

  return (
    <Styled.Container
      source={useColorScheme() === "dark" ? BackgroundDark : BackgroundLight}
      resizeMode="stretch">
      <Styled.IndicatorContainer cents={cents} style={[animatedStyles]}>
        <Styled.Indicator color={color} />
        <Styled.Frequency color={color}>{frequency} Hz</Styled.Frequency>
      </Styled.IndicatorContainer>
    </Styled.Container>
  );
};

export default Meter;
