import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent} from 'react';
import MovieForm, {ActionType} from './MovieForm';
import { within, userEvent } from '@storybook/testing-library';

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
        actionType: ActionType.NONE,
    },
};
export const AddMovieAction: Story = {
    args: {
        initialMovieInfo: null,
        callbackSubmitAction: () => {
            console.log("Add movie");
        },
        actionType: ActionType.ADD
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
        initialMovieInfo: null,
        callbackSubmitAction: () => {
            console.log("Edit movie");
        },
        actionType: ActionType.EDIT,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const openDialogButton = await canvas.getByRole('button', {
            name: /open movie form/i,
        });
        await userEvent.click(openDialogButton);
    },
};
export const DeleteMovieAction: Story = {
    args: {
        initialMovieInfo: null,
        callbackSubmitAction: () => {
            console.log("Delete movie");
        },
        actionType: ActionType.DELETE,
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const openDialogButton = await canvas.getByRole('button', {
            name: /open movie form/i,
        });
        await userEvent.click(openDialogButton);
    },
};