import React, { useEffect, useRef, ReactNode } from "react";
import { Animated } from "react-native";

type AnimatedItemProps = {
  children: ReactNode;
  delay?: number;
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0 }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay,
      useNativeDriver: true
    }).start();
  }, [opacity, delay]);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
};

export default AnimatedItem;
