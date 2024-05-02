import { ThemeType } from '@app/utils/types-and-interfaces';
import { useTypedSelector } from '@redux/store';
import theme from '@theme/index';

/**
 * Custom hook for accessing theme-related data from Redux store.
 * @returns {} An object containing colors and icons based on the current theme.
 */
const useTheme = () => {
  /**
   * Selects the current theme from the Redux store.
   */
  const { appTheme } = useTypedSelector((state) => state.themeReducer);

  /**
   * Retrieves the current theme object from the theme index.
   */
  const currnetTheme = theme.theme && (appTheme as ThemeType) && theme.theme[appTheme as ThemeType];

  /**
   * Returns colors and icons based on the current theme.
   */
  return {
    colors: currnetTheme.colors,
    icons: currnetTheme.icons
  };
};

export default useTheme;
