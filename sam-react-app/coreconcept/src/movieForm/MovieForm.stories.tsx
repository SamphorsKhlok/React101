import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent} from 'react';
import MovieForm from './MovieForm';
import { within, userEvent } from '@storybook/testing-library';
import {MovieType} from "../common/types";

const meta: Meta<typeof MovieForm> = {
    title: 'MovieForm component',
    component: MovieForm,
    tags: ['autodocs'],
} satisfies Meta<typeof MovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RenderData: Story = {
    args: {
        initialMovieInfo: null,
        callbackSubmitAction: () => {
        },
    },
};
export const AddMovieAction: Story = {
    args: {
        initialMovieInfo: null,
        callbackSubmitAction: () => {
            console.log("Add movie");
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const openDialogButton = await canvas.getByRole('button', {
            name: /open movie form/i,
        });
        await userEvent.click(openDialogButton);
    },
};
export const EditMovieAction: Story = {
    args: {
        initialMovieInfo: {
            title: "John Wick",
            url: "xyz",
            releaseDate: "2023",
            rating: 8,
            duration: 250,
            description: "One of the best action movie",
            genre: ["Action", "Thriller"],
        } as MovieType,
        callbackSubmitAction: () => {
            console.log("Edit movie");
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const openDialogButton = await canvas.getByRole('button', {
            name: /open movie form/i,
        });
        await userEvent.click(openDialogButton);
    },
};