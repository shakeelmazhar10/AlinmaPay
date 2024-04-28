import React, { useState } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { RNText, RNTextInput, RNView } from '@components/atoms/index';
import styles from './RNTextInputWithHeading.style';

/**
 * Props for the RNTextInputWithHeading component.
 */
interface RNTextInputWithHeadingProps {
    /**
     * The heading text to be displayed above the input field.
     */
    heading: string;
    /**
     * Style for the container of the component.
     */
    containerStyle?: ViewStyle;
    /**
     * Style for the heading text.
     */
    headingStyles?: TextStyle;
    /**
     * Style for the input text.
     */
    inputTextStyles?: TextStyle;
    /**
     * Callback function to be executed when the text in the input field changes.
     * @param {string} text - The new text entered in the input field.
     */
    onChangeTextCallback?: (text: string) => void;
}

/**
 * A component consisting of a heading and an input field.
 * @param {RNTextInputWithHeadingProps} props - The props for the RNTextInputWithHeading component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNTextInputWithHeading: React.FC<RNTextInputWithHeadingProps> = ({
    heading = 'Enter Name',
    containerStyle,
    headingStyles,
    inputTextStyles,
    onChangeTextCallback
}) => {
    const [text, setText] = useState<string>('');

    /**
     * Handles the text change event in the input field.
     * @param {string} txt - The new text entered in the input field.
     */
    const onChangeText = (txt: string): void => {
        setText(txt);
        onChangeTextCallback && onChangeTextCallback(txt);
    };

    return (
        <RNView style={[styles.container, containerStyle]}>
            <RNText text={heading} style={[headingStyles]} />
            <RNTextInput text={text} onChangeText={onChangeText} style={[inputTextStyles]} />
        </RNView>
    );
};

export default RNTextInputWithHeading;
