import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {within, userEvent} from '@storybook/testing-library';
import Counter from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Counter component',
    component: Counter,
    tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialValue: Story = {
    args: {
        initialValue: 10,
    },
};
export const Increment: Story = {
    args: {
        initialValue: 20,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const incrementButton = await canvas.getByRole('button', {
            name: "increment +1",
        });
        await userEvent.click(incrementButton);
    },
};
export const Decrement: Story = {
    args: {
        initialValue: 10,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const decrementButton = await canvas.getByRole('button', {
            name: "decrement -1",
        });
        await userEvent.click(decrementButton);
    },
};