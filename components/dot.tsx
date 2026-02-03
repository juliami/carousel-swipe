import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface DotProps {
  index: number;
  offsetX: ReturnType<typeof useSharedValue<number>>;
  windowWidth: number;
}

const Dot = ({ index, offsetX, windowWidth }: DotProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const currentIndex = Math.round(offsetX.value / windowWidth);
    const isActive = currentIndex === index;

    return {
      transform: [{ scale: withTiming(isActive ? 1.4 : 0.8, { duration: 200 }) }],
      opacity: withTiming(isActive ? 1 : 0.5, { duration: 200 }),
    };
  });
  
  return (
    <Animated.View style={[styles.dot, animatedStyle]} />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default Dot;
