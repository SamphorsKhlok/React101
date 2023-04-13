import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import MovieTile from './movieTile';

const meta: Meta<typeof MovieTile> = {
    title: 'MovieTile component',
    component: MovieTile,
    tags: ['autodocs'],
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RenderData: Story = {
    args: {
        movieName: "John Wick 4",
        releaseYear: 2023,
        genreList: ["action", "thriller", "adventure"],
        onClickCallback: () => {
        },
        imageUrl: "https://ae01.alicdn.com/kf/HTB1Qr0iLXXXXXaoXVXXq6xXFXXXq/John-Wick-Point-Blank-Hi-Res-Movie-Poster-print-on-silk-wall-art-Home-Decoration-12x18.jpg",
    },
};