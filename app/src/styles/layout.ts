/**
 * Defines a set of layout and styling constants for consistent design across the application.
 */
import { Dimensions } from 'react-native';
import { spacing } from './spacing';
import { typography } from './typography';
import { constants } from '@utils/index';

const { width, height } = Dimensions.get('screen');

const layout =  {
  window: {
    width,
    height
  },
  isSmallDevice: width < constants.IDLE_SCREEN_WIDTH,
  defaultFontSize: typography.FONT_SIZE_10,
  defaultTitleSize: typography.FONT_SIZE_33,
  btnRadius: spacing.SCALE_50,
  cardRadius: spacing.SCALE_10,
  inputRadius: spacing.SCALE_12,
  inputHeight: spacing.SCALE_50,
  defaultHeaderHeight: 70,
  defaultBottomPadding: 70,
  defaultHeaderIconSize: spacing.SCALE_16,
  defaultPagePadding: width < constants.IDLE_SCREEN_WIDTH ? spacing.SCALE_16 : spacing.SCALE_20,
  defaultDateFormat: 'DD.MM.YY'
};

export default layout;