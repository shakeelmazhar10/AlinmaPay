import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RNTextInputWithHeading } from '@components/molecules';
import {
  SCALE_1, SCALE_10, SCALE_14, SCALE_16, SCALE_4, SCALE_50, SCALE_60,
} from '@theme/spacing';
import { RNView } from '@components/atoms';
import colors from '@theme/colors';

const RNTextInputWithHeadingMeta: Meta<typeof RNTextInputWithHeading> = {
  title: 'components/input feilds/RNTextInputWithHeading',
  component: RNTextInputWithHeading,
  argTypes: {
    onChangeTextCallback: { action: 'Text entered' },
  },
  args: {
    placeholder: 'Enter Name',
    containerStyle: {
      height: SCALE_60,
      width: '90%',
      // marginHorizontal: SCALE_10,
      justifyContent: 'center',

    },
    headingStyles: {
      color: colors.black,
      fontSize: SCALE_14,
    },
    inputTextStyles: {
      flex: 1,
      borderWidth: SCALE_1,
      borderRadius: SCALE_4,
      color: colors.black,
      fontSize: SCALE_16,
      paddingHorizontal: SCALE_10,
      paddingVertical: SCALE_4,
      borderColor: colors.black,
    },
  },
  decorators: [
    (Story) => (
      <RNView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </RNView>
    ),
  ],
};

export default RNTextInputWithHeadingMeta;

export const Basic: StoryObj<typeof RNTextInputWithHeadingMeta> = {};

export const SmallerTextInput: StoryObj<typeof RNTextInputWithHeading> = {
  args: {
    placeholder: 'Enter Age',
    containerStyle: {
      height: SCALE_60,
      width: '50%',
      // marginHorizontal: SCALE_10,
      justifyContent: 'center',

    },
    headingStyles: {
      color: colors.black,
      fontSize: SCALE_14,
    },
    inputTextStyles: {
      flex: 1,
      borderWidth: SCALE_1,
      borderRadius: SCALE_4,
      color: colors.black,
      fontSize: SCALE_14,
      paddingHorizontal: SCALE_10,
      paddingVertical: SCALE_4,
      borderColor: colors.black,
    },
  },
};
