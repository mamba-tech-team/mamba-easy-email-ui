import {
  IBlockData,
  BasicType,
  components,
  createCustomBlock,
  getPreviewClassName,
  AdvancedType,
  mergeBlock,
} from 'easy-email-core';

import { CustomBlocksType } from '../constants';
import React from 'react';

const { Wrapper, Text, Column, Section, Image } = components;

export type ICustomHtml = IBlockData<
  {
    content: string;
  }
>;

export const CustomHtml = createCustomBlock<ICustomHtml>({
  name: 'Custom HTML',
  type: CustomBlocksType.CUSTOM_HTML,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, BasicType.WRAPPER],
  create: payload => {
    const defaultData: ICustomHtml = {
      type: CustomBlocksType.CUSTOM_HTML,
      data: {
        value: {
          content: '',
        },
      },
      attributes: {
        content: '',
      },
      children: []
    };
    return mergeBlock(defaultData, payload);
  },
  render: ({ data, idx, mode }) => {
    const { content } = data.data.value;
    const isEmtny = content === ''

    return (
      <Wrapper
        css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) : ''}
        padding='0px'
        border='none'
        direction='ltr'
        text-align='center'
      >
        <Section padding='0px'>
          <Column
            padding='0px'
            border='none'
            vertical-align='top'
          >
            {isEmtny ? (
              <Image padding='0px' src='https://dvamghaolyr74.cloudfront.net/Public/mailBaseTemplateImage/05.svg'></Image>
            ): (
              <Text>
                {content}
              </Text>
            )}
          </Column>
        </Section>
      </Wrapper>
    );
  },
});

export { Panel } from './Panel';