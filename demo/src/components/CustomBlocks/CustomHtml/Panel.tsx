import { Stack } from '@demo/components/Stack';
import { IconFont, useFocusIdx } from 'easy-email-editor';
import {
  AttributesPanelWrapper,
  ColorPickerField,
  TextAreaField
} from 'easy-email-extensions';
import React, { useState } from 'react';
import { Button, Tooltip } from '@arco-design/web-react';
import { HtmlEditor } from '../../../../../packages/easy-email-extensions/src/AttributePanel/components/UI/HtmlEditor';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  const [visible, setVisible] = useState(false);
  return (
    <AttributesPanelWrapper
      style={{ padding: 20 }}
      extra={(
        <Tooltip content={t('Html mode')}>
          <Button
            onClick={() => setVisible(true)}
            icon={<IconFont iconName='icon-html' />}
          />
        </Tooltip>
      )}
    >
      <TextAreaField
        label={t('HTML Content')}
        name={`${focusIdx}.data.value.content`}
        rows={6}
      />
      <HtmlEditor
        visible={visible}
        setVisible={setVisible}
      />
    </AttributesPanelWrapper>
  );
}