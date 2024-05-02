import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextStyle } from 'react-native';
import styles from './rn-text.style';

/**
 * Props for the RNText component.
 */
interface RNTextProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * The text content to be displayed.
   */
  text?: string;
  /**
   * Style for the text.
   */
  style?: TextStyle | ({} | undefined)[];
  /**
   * Maximum number of lines to show. If undefined, all lines will be shown.
   */
  numberOfLines?: number;
  /**
   * Children components to be rendered inside the RNText.
   */
  children?: React.ReactNode;
}

/**
 * A component to display localized text.
 * @param {RNTextProps} props - The props for the RNText component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNText: React.FC<RNTextProps> = ({ testID, text, style, numberOfLines, children }: RNTextProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <Text testID={testID} numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
      {text ? t(`${text}`) : children}
    </Text>
  );
};

export default RNText;
