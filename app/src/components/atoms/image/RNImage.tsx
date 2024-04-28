import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import styles from './RNImage.style';

/**
 * Props for the RNImage component.
 */
interface RNImageProps {
    /**
     * Style for the image.
     */
    style?: ImageStyle;
    /**
     * Source of the image. It can be a local asset or a URL.
     */
    image: string;
}

/**
 * A component to display images with support for local and remote sources.
 * @param {RNImageProps} props - The props for the RNImage component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNImage: React.FC<RNImageProps> = ({ style, image }: RNImageProps): JSX.Element => {
    // Determine the source of the image based on whether it is a local asset or a URL
    const source: ImageSourcePropType = image.startsWith('http') || image.startsWith('https')
        ? { uri: image } // Remote URL
        : require(image); // Local asset

    return (
        <Image
            testID={image}
            style={[styles.imageStyles, style]}
            source={source}
        />
    );
};

export default RNImage;
