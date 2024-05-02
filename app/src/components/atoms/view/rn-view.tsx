import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './rn-view.style';

/**
 * Props for the RNView component.
 */
interface RNViewProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * The children components to be rendered inside the View.
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Style for the View container.
   */
  style?: ViewStyle | ViewStyle[];
}

/**
 * A container component to layout and arrange child components.
 * @param {RNViewProps} props - The props for the RNView component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNView: React.FC<RNViewProps> = ({ testID, children, style }: RNViewProps): JSX.Element => {
  return (
    <View testID={testID} style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default RNView;
