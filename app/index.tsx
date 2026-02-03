import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Slide from '@/components/slide';
import Dot from '@/components/dot';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import BGImage from '@/components/BGImage';


const slides = [
  { id: 0, text: "Ultimate collage making tool", bgImage: require('@/assets/images/crazy-collage.jpg'), frontImage: require('@/assets/images/ap3.png') },
  { id: 1, text: "Create stunning collages with ease", bgImage: require('@/assets/images/bg2.png'), frontImage: require('@/assets/images/ap2.png') },
  { id: 2, text: "Add your own photos and videos", bgImage: require('@/assets/images/crazy-collage.jpg'), frontImage: require('@/assets/images/ap1.png') }

];

export default function Screen() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const offsetX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetX.value = event.contentOffset.x;
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgContainer}>
        {slides.map((slide, index) => (
          <BGImage
            key={index}
            index={index}
            bgImage={slide.bgImage}
            offsetX={offsetX}
            windowWidth={windowWidth}
          />
        ))}
      </View>

      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={{ width: slides.length * windowWidth }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} text={slide.text} width={windowWidth} height={windowHeight} frontImage={slide.frontImage} />
        ))}
      </Animated.ScrollView>

      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <Dot key={index} index={index} offsetX={offsetX} windowWidth={windowWidth} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
  },
  bgContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});
