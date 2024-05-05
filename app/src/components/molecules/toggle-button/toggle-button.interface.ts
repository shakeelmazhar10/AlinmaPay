import { ViewStyle } from "react-native";

/**
 * Props for ToggleButton component.
 */
export interface ToggleButtonProps {
  /**
   * Custom styles for the ToggleButton.
   */
  style?: ViewStyle;
  /**
   * Current state of the toggle button.
   */
  toggleState?: boolean;
  /**
   * Callback function to handle toggle state change.
   * @param {boolean} isOn - The new state of the toggle button.
   */
  onToggleChange?: (isOn: boolean) => void;
}
