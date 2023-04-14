import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent} from 'react';
import Sort from './sort';
import {fireEvent, within} from "@storybook/testing-library";

const meta: Meta<typeof Sort> = {
    title: 'Sort component',
    component: Sort,
    tags: ['autodocs'],
} satisfies Meta<typeof Sort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RenderData: Story = {
    args: {
        selectedOption: "Title",
        onSelectCallback: () => {
        },
    },
};
export const SelectReleaseDate: Story = {
    args: {
        selectedOption: "Title",
        onSelectCallback: (event: ChangeEvent<HTMLSelectElement>) => {
            console.log(event.target.value);
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const selectElement = await canvas.getByRole('select');
        fireEvent.change(selectElement, { target: { value: "Release Date"}});
    },
};