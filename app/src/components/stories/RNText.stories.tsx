import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RNText, RNView } from '@components/atoms';
import colors from '@theme/colors';
import { SCALE_12, SCALE_16, SCALE_20 } from '@theme/spacing';

const RNTextMeta: Meta<typeof RNText> = {
  title: 'components/text/RNText',
  component: RNText,
  args: {
    text: 'Hello world',
    style: {
      color: colors.black,
      fontSize: SCALE_16,
      fontWeight: '500'
    }
  },
  decorators: [
    (Story) => (
      <RNView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </RNView>
    )
  ]
};

export default RNTextMeta;

export const Basic: StoryObj<typeof RNText> = {};

export const SmallerText: StoryObj<typeof RNText> = {
  args: {
    text: 'Hello world',
    style: {
      color: colors.green,
      fontSize: SCALE_12,
      fontWeight: '200'
    }
  }
};

export const LargerText: StoryObj<typeof RNText> = {
  args: {
    text: 'Hello world',
    style: {
      color: colors.black,
      fontSize: SCALE_20,
      fontWeight: '700'
    }
  }
};
