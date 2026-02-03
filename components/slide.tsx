import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { ThemedText } from "./themed-text";



const Slide = ({ text, width, height, frontImage}:  {text: string, width: number, height: number, frontImage: ImageSourcePropType}) => {
  return (  
    <View style={[styles.slide, { flexBasis: width, height }]}>
        <Image source={frontImage} style={styles.image} resizeMode="contain" />
      <ThemedText style={styles.text}>{text}</ThemedText>
    </View>
  );
};
const styles = StyleSheet.create({
    slide: {
        flexGrow: 0,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
      },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '80%',
        height: '75%',
        marginBottom: 20,
        

    },
  });

export default Slide;