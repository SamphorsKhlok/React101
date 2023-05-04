import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent} from 'react';
import DeleteMovieForm from './DeleteMovieForm';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof DeleteMovieForm> = {
    title: 'DeleteMovieForm component',
    component: DeleteMovieForm,
    tags: ['autodocs'],
} satisfies Meta<typeof DeleteMovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RenderData: Story = {
    args: {
        initialMovieInfo: null,
        callbackSubmitAction: () => {
        },
    },
};