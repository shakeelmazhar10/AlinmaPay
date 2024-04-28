import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextInput,
  TextStyle,
  InputModeOptions,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './RNTextInput.style';

/**
 * Props for the RNTextInput component.
 */
interface RNTextInputProps {
  /**
   * Unique identifier for the input field.
   */
  text: string;
  /**
   * Style for the text input.
   */
  style?: (TextStyle | undefined)[];
  /**
   * Maximum number of lines to show. If undefined, a single line input is rendered.
   */
  numberOfLines?: number;
  /**
   * Placeholder text displayed when the input is empty.
   */
  placeholder?: string;
  /**
   * Color of the placeholder text.
   */
  placeholderTextColor?: string;
  /**
   * If false, the input field is disabled and cannot be edited.
   */
  editable?: boolean;
  /**
   * Determines how the text is capitalized.
   */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  /**
   * Determines whether auto-completion is enabled for the input field.
   */
  autoComplete?: any;
  /**
   * If true, the input field is focused on mount.
   */
  autoFocus?: boolean;
  /**
   * The input mode of the keyboard.
   */
  inputMode?: InputModeOptions;
  /**
   * Maximum length of the entered text.
   */
  maxLength?: number;
  /**
   * If true, the input field can contain multiple lines of text.
   */
  multiline?: boolean;
  /**
   * The type of keyboard to display.
   */
  keyboardType?: KeyboardTypeOptions;
  /**
   * If true, the input field is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Callback function called when the input field loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback function called when the text in the input field changes.
   * @param {string} text - The new text entered in the input field.
   */
  onChangeText: (text: string) => void;
  /**
   * Callback function called when a touch gesture is initiated on the input field.
   */
  onPressIn?: () => void;
  /**
   * Callback function called when a touch gesture is released on the input field.
   */
  onPressOut?: () => void;
  /**
   * Callback function called when the input field receives focus.
   */
  onFocus?: () => void;
  /**
   * Callback function called when the "submit" button is pressed on the keyboard.
   * @param {string} text - The current text in the input field.
   */
  onSubmitEditing?: (text?: string) => void;
}

/**
 * A component to display and input text.
 * @param {RNTextInputProps} props - The props for the RNTextInput component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNTextInput: React.FC<RNTextInputProps> = ({
  text,
  style,
  numberOfLines,
  placeholder,
  placeholderTextColor,
  editable,
  autoCapitalize,
  autoComplete,
  autoFocus,
  inputMode,
  maxLength,
  multiline,
  keyboardType,
  readOnly,
  onBlur,
  onChangeText,
  onPressIn,
  onPressOut,
  onFocus,
  onSubmitEditing,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <TextInput
      testID={t(`${text}`)}
      value={t(`${text}`)}
      numberOfLines={numberOfLines}
      style={[styles.textInputStyle, style]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      inputMode={inputMode}
      maxLength={maxLength}
      multiline={multiline}
      keyboardType={keyboardType}
      readOnly={readOnly}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onFocus={onFocus}
      onSubmitEditing={() => onSubmitEditing && onSubmitEditing(text)}
    />
  );
};

export default RNTextInput;
