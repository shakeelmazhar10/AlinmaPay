import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './RNView.style';

/**
 * Props for the RNView component.
 */
interface RNViewProps {
  /**
   * The children components to be rendered inside the View.
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Style for the View container.
   */
  style?: (ViewStyle | { flex: number } | undefined)[];
}

/**
 * A container component to layout and arrange child components.
 * @param {RNViewProps} props - The props for the RNView component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNView: React.FC<RNViewProps> = ({ children, style }: RNViewProps): JSX.Element => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RNView;
