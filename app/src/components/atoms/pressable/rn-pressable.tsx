import React from 'react';
import { Pressable } from 'react-native';
import colors from '@theme/colors';
import styles from './rn-pressable.style';
import { RNPressableProps } from './rn-pressable.interface';

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
