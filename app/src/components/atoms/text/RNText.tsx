import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextStyle } from 'react-native';
import styles from './RNText.style';

/**
 * Props for the RNText component.
 */
interface RNTextProps {
  /**
   * The text content to be displayed.
   */
  text: string;
  /**
   * Style for the text.
   */
  style?: TextStyle | ({} | undefined)[];
  /**
   * Maximum number of lines to show. If undefined, all lines will be shown.
   */
  numberOfLines?: number;
}

/**
 * A component to display localized text.
 * @param {RNTextProps} props - The props for the RNText component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNText: React.FC<RNTextProps> = ({ text, style, numberOfLines }: RNTextProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <Text testID={t(`${text}`)} numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
      {t(`${text}`)}
    </Text>
  );
};

export default RNText;
