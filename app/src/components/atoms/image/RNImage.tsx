import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native';

interface RNImageProps {
  style?: ImageStyle;
  image: ImageSourcePropType | '';
}

const RNImage: React.FC<RNImageProps> = ({ style, image }) => {
  const source: ImageSourcePropType =
    typeof image === 'string' && (image.startsWith('http') || image.startsWith('https'))
      ? { uri: image }
      : (image as ImageSourcePropType);
  return <Image testID={image.toString()} style={[styles.imageStyles, style]} source={source} />;
};

const styles = StyleSheet.create({
  imageStyles: {
    flex: 1
  }
});

export default RNImage;
