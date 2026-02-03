# Carousel Swipe

An animated onboarding carousel built with React Native and React Native Reanimated. This is a learning project to explore animations and gesture handling in React Native.

## Features

- Horizontal swipeable carousel with paging
- Animated background image transitions with fade effects
- Animated dot indicators that scale and fade based on current slide
- Smooth 60fps animations running on the UI thread

## Reanimated Concepts Used

This project demonstrates several key Reanimated concepts:

- **Shared Values** (`useSharedValue`) - Storing scroll position that can be read from both JS and UI threads
- **Animated Styles** (`useAnimatedStyle`) - Creating reactive styles that update based on shared values
- **Scroll Handlers** (`useAnimatedScrollHandler`) - Tracking scroll events efficiently on the UI thread
- **Timing Animations** (`withTiming`) - Smooth fade transitions for background images and dot indicators
- **Animated Components** (`Animated.createAnimatedComponent`) - Wrapping native components to support animated styles

## Project Structure

```
app/
  index.tsx          # Main carousel screen
components/
  BGImage.tsx        # Animated background image with fade effect
  Dot.tsx            # Animated pagination dot
  Slide.tsx          # Individual slide content
```

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start
   ```

3. Run on your device using [Expo Go](https://expo.dev/go) or a development build

## Tech Stack

- [Expo](https://expo.dev) (SDK 54)
- [React Native](https://reactnative.dev) 0.81
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) 4.1
- TypeScript

## Learning Resources

- [Reanimated Documentation](https://docs.swmansion.com/react-native-reanimated/)
- [Reanimated Fundamentals](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
