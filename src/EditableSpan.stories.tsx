import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { EditableSpan, EditableSpanPropsType } from './EditableSpan';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'Value EditableSpan changed'
        }
    }
} as Meta;

const changeTaskStatusCallback = action('Status changed inside Task')
const changeTaskTitleCallback = action('Status title inside Task')
const removeTaskCallback = action('Remove button inside Task clicked')

const Template: Story<EditableSpanPropsType> = (args: EditableSpanPropsType) => <EditableSpan {...args} />;



export const EditableSpanExample = Template.bind( {} );
EditableSpanExample.args = {
   onChange: action( 'Value EditableSpan changed' )
}

