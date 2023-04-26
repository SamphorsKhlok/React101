import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import MovieDetails from './movieDetails';

const meta: Meta<typeof MovieDetails> = {
    title: 'MovieDetails component',
    component: MovieDetails,
    tags: ['autodocs'],
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RenderData: Story = {
    args: {
        movie: {
            movieName: "John Wick 4",
            releaseYear: 2023,
            duration: 5411222,
            rating: 7/10,
            description: "John Wick is an American action thriller media franchise created by Derek Kolstad and centered around John Wick, a former hitman who is forced back into the criminal underworld he had previously abandoned.",
            imageUrl: "https://ae01.alicdn.com/kf/HTB1Qr0iLXXXXXaoXVXXq6xXFXXXq/John-Wick-Point-Blank-Hi-Res-Movie-Poster-print-on-silk-wall-art-Home-Decoration-12x18.jpg",
        }
    },
};