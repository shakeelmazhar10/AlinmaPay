import React from 'react';
import { ViewStyle, Pressable } from 'react-native';
import colors from '@theme/colors';
import styles from './rn-pressable.style';

/**
 * Props for the RNPressable component.
 */
interface RNPressableProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * The children components to be rendered inside the Pressable.
   */
  children?: JSX.Element;
  /**
   * Style for the Pressable container.
   */
  style?: ViewStyle | ({} | undefined)[];
  /**
   * If true, the Pressable is disabled and cannot be pressed.
   */
  disabled?: boolean;
  /**
   * The opacity of the Pressable when pressed.
   */
  activeOpacity?: number;
  /**
   * Callback function called when the Pressable is pressed.
   */
  onPress: () => void;
  /**
   * Callback function called when a touch gesture is initiated on the Pressable.
   */
  onPressIn?: () => void;
  /**
   * Callback function called when a touch gesture is released on the Pressable.
   */
  onPressOut?: () => void;
}

/**
 * A component that responds to press interactions.
 * @param {RNPressableProps} props - The props for the RNPressable component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNPressable: React.FC<RNPressableProps> = ({
  testID,
  children,
  style,
  disabled,
  activeOpacity,
  onPress,
  onPressIn,
  onPressOut
}: RNPressableProps): JSX.Element => {
  return (
    <Pressable
      testID={testID}
      style={({ pressed }) => [
        styles.container,
        style,
        {
          opacity: pressed ? activeOpacity : 1,
          backgroundColor: colors.vibrantBlue
        }
      ]}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {children}
    </Pressable>
  );
};

export default RNPressable;
