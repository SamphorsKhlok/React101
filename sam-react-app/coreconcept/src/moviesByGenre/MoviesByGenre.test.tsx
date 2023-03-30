import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import MoviesByGenre from "./MoviesByGenre";

describe('SearchFormTest', () => {
    const testGenreList = ["option a","option b","option c"];

    it('renders all genres correctly', () => {
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={()=>{}} />);
        const selectElement = screen.getByRole('select');

        expect(selectElement.length).toEqual(3);
        expect(Array.from(selectElement).map(option=>option.value).join(",")).toEqual('option a,option b,option c');
    });

    it('renders selected genre correctly', () => {
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={()=>{}} />);
        const selectElement = screen.getByRole('select');

        expect(selectElement.value).toEqual("option b");
    });

    it('change selection, expect callback to have been called', () => {
        const callbackFn = jest.fn();
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={callbackFn} />);
        const selectElement = screen.getByRole('select');

        fireEvent.change(selectElement, { target: { value: testGenreList[2]}});

        expect(callbackFn).toHaveBeenCalled();
    });
});
