import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

interface BGImageProps {
    index: number;
    bgImage: ImageSourcePropType;
    offsetX: ReturnType<typeof useSharedValue<number>>;
    windowWidth: number;
}

const BGImage = ({ index, bgImage, offsetX, windowWidth }: BGImageProps) => {
    const animatedStyle = useAnimatedStyle(() => {
        const currentIndex = Math.round(offsetX.value / windowWidth);
        const isActive = index === currentIndex;
        return {
            opacity: withTiming(isActive ? 1 : 0, { duration: 500 })
        };
    });

    return (
        <AnimatedImageBackground
            source={bgImage}
            style={[StyleSheet.absoluteFillObject, animatedStyle]}
            resizeMode="cover"
        />
    );
};

export default BGImage;