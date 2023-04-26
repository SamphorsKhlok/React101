import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {within, userEvent} from '@storybook/testing-library';
import SearchForm from "./SearchForm";

const meta: Meta<typeof SearchForm> = {
    title: 'Search form component',
    component: SearchForm,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
    args: {
        initialQuery: "what to search",
    },
};

export const ClickSearch: Story = {
    args: {
        initialQuery: "how to write a story",
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const searchButton = await canvas.getByRole('button', {
            name: "Search",
        });
        await userEvent.click(searchButton);
    },
};