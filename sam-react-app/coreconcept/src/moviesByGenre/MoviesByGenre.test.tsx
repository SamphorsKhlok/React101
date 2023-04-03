import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import MoviesByGenre from "./MoviesByGenre";

describe('SearchFormTest', () => {
    const testGenreList = ["option a","option b","option c"];

    it('renders all genres as options correctly', () => {
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={()=>{}} />);
        const selectElement = screen.getByRole('select');

        expect(Array.from(selectElement.children).map(option =>option.getAttribute('value')).join(",")).toEqual('option a,option b,option c');
    });

    it('renders option b as a selected genre correctly', () => {
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={()=>{}} />);
        const selectElement = screen.getByRole('select') as HTMLSelectElement;

        expect(selectElement.value).toEqual("option b");
    });

    it('change selection, expect callback to have been called with selected option c', () => {
        const callbackFn = jest.fn();
        render(<MoviesByGenre
            genreList={testGenreList}
            selectedGenre={testGenreList[1]}
            onSelect={callbackFn} />);
        const selectElement = screen.getByRole('select');

        fireEvent.change(selectElement, { target: { value: testGenreList[2]}});

        expect(callbackFn).toHaveBeenCalledWith('option c');
    });
});
