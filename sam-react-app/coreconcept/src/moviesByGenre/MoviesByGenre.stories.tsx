import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import MoviesByGenre from "./MoviesByGenre";
import {within} from "@storybook/testing-library";
import {fireEvent} from "@testing-library/react";

const meta: Meta<typeof MoviesByGenre> = {
    title: 'Movie by genre component',
    component: MoviesByGenre,
    tags: ['autodocs'],
} satisfies Meta<typeof MoviesByGenre>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialSelectAction: Story = {
    args: {
        genreList: ["Crime", "Action", "All"],
        selectedGenre: "Action",
    },
};

export const SelectAllGenre: Story = {
    args: {
        genreList: ["Crime", "Action", "All"],
        selectedGenre: "Action",
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const selectElement = await canvas.getByRole('select');
        fireEvent.change(selectElement, { target: { value: "All"}});
    },
};