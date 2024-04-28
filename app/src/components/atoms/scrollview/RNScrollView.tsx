import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import styles from './RNScrollView.style';

/**
 * Props for the RNScrollView component.
 */
interface RNScrollViewProps {
    /**
     * The children components to be rendered inside the ScrollView.
     */
    children?: JSX.Element | JSX.Element[];
    /**
     * Style for the ScrollView container.
     */
    style?: (ViewStyle | { flex: number; } | undefined)[];
    /**
     * If true, the ScrollView scrolls horizontally instead of vertically.
     */
    horizontal?: boolean; 
    /**
     * Custom refresh control element.
     */
    refreshControl?: React.ReactElement;
}

/**
 * A customizable ScrollView component.
 * @param {RNScrollViewProps} props - The props for the RNScrollView component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNScrollView: React.FC<RNScrollViewProps> = ({
    children,
    style,
    horizontal,
    refreshControl,
    ...rest
}: RNScrollViewProps): JSX.Element => {
    return (
        <ScrollView
            style={[styles.container, style]}
            horizontal={horizontal}
            refreshControl={refreshControl}
            {...rest}
        >
            {children}
        </ScrollView>
    );
};

export default RNScrollView;
