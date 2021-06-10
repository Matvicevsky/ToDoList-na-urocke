import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Task, TaskPropsType } from './Task';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Task',
    component: Task
} as Meta;

const changeTaskStatusCallback = action('Status changed inside Task')
const changeTaskTitleCallback = action('Status title inside Task')
const removeTaskCallback = action('Remove button inside Task clicked')

const Template: Story<TaskPropsType> = (args: TaskPropsType) => <Task {...args} />;

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitleCallback: changeTaskTitleCallback,
    removeTaskCallback: removeTaskCallback
}

export const TaskIsDoneExample = Template.bind( {} );
TaskIsDoneExample.args = {
    ...baseArgs,
    task: { id: '1', isDone: true, title: 'JS' }
}
export const TaskIsNotDoneExample = Template.bind( {} );
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: { id: '1', isDone: false, title: 'JS' }
}
