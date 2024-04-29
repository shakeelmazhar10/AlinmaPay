import React, { useState } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { RNView } from '@components/atoms';
import { RNButton, RNTextInputWithHeading } from '@components/molecules';
import styles from './RNTextInputWithSubmitBtn.style';

/**
 * Props for the RNTextInputWithSubmitBtn component.
 */
interface RNTextInputWithSubmitBtnProps {
  /**
   * The heading text for the input field.
   */
  inputTextHeading: string;
  /**
   * Callback function called when the submit button is pressed.
   * @param {string} text - The text entered in the input field.
   */
  onPressBtn: (text: string) => void;
  /**
   * Style for the container of the component.
   */
  containerStyles?: ViewStyle;
  /**
   * Style for the container of the input field.
   */
  inputTextContainerStyles?: ViewStyle;
  /**
   * Style for the heading text of the input field.
   */
  inputTextHeadingStyles?: TextStyle;
  /**
   * Style for the input text.
   */
  inputTextStyles?: TextStyle;
  /**
   * Style for the submit button.
   */
  btnStyle?: ViewStyle;
  /**
   * Style for the text of the submit button.
   */
  btnTextStyles?: TextStyle;
}

/**
 * A component consisting of a text input field and a submit button.
 * @param {RNTextInputWithSubmitBtnProps} props - The props for the RNTextInputWithSubmitBtn component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNTextInputWithSubmitBtn: React.FC<RNTextInputWithSubmitBtnProps> = ({
  inputTextHeading = 'Enter your name',
  onPressBtn,
  containerStyles,
  inputTextContainerStyles,
  inputTextHeadingStyles,
  inputTextStyles,
  btnStyle,
  btnTextStyles
}) => {
  const [text, setText] = useState<string>('');

  /**
   * Handles the submit button press event.
   */
  const onPress = () => {
    onPressBtn(text);
  };

  return (
    <RNView style={[styles.container, containerStyles]}>
      <RNTextInputWithHeading
        heading={inputTextHeading}
        onChangeTextCallback={setText}
        containerStyle={inputTextContainerStyles}
        headingStyles={inputTextHeadingStyles}
        inputTextStyles={inputTextStyles}
      />
      <RNButton onPress={onPress} btnText="Submit" btnStyle={btnStyle} textStyle={btnTextStyles} />
    </RNView>
  );
};

export default RNTextInputWithSubmitBtn;
