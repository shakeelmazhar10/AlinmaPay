import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { RNText, RNPressable } from '@components/atoms/index';
import styles from './rn-button.style';

/**
 * Props for the RNButton component.
 */
interface RNButtonProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * Callback function to be executed when the button is pressed.
   */
  onPress: () => void;
  /**
   * Text to be displayed on the button.
   */
  btnText: string;
  /**
   * Style for the button container.
   */
  btnStyle?: ViewStyle;
  /**
   * Style for the text inside the button.
   */
  textStyle?: TextStyle;
}

/**
 * A customizable button component.
 * @param {RNButtonProps} props - The props for the RNButton component.
 * @returns {JSX.Element} - The rendered component.
 */

const RNButton: React.FC<RNButtonProps> = ({testID, onPress, btnText, btnStyle, textStyle }: RNButtonProps): JSX.Element => {
  return (
    <RNPressable testID={testID} onPress={onPress} style={[styles.buttonStyles, btnStyle]}>
      <RNText text={btnText} style={[styles.btnTextStyle, textStyle]} />
    </RNPressable>
  );
};

export default RNButton;
