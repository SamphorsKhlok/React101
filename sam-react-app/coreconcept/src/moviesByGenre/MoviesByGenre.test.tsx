import React, {ComponentProps} from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import MoviesByGenre, {MoviesByGenreComponentProps} from "./MoviesByGenre";

describe('SearchFormTest', () => {
    const testGenreList = ["option a","option b","option c"];
    const defaultTestProps: MoviesByGenreComponentProps = {
        genreList: testGenreList,
        selectedGenre: testGenreList[1],
        onSelect:()=>{},
    };
    const renderComponent = (props: MoviesByGenreComponentProps = defaultTestProps)=>{
        render(<MoviesByGenre {...props} />)
    }

    it('renders all genres as options correctly', () => {
        renderComponent();
        const selectElement = screen.getByRole('select');

        expect(Array.from(selectElement.children).map(option =>option.getAttribute('value')).join(",")).toEqual('option a,option b,option c');
    });

    it('renders option b as a selected genre correctly', () => {
        renderComponent();
        const selectElement = screen.getByRole('select') as HTMLSelectElement;

        expect(selectElement.value).toEqual("option b");
    });

    it('change selection, expect callback to have been called with selected option c', () => {
        const callbackFn = jest.fn();
        const props = {...defaultTestProps, onSelect: callbackFn};
        renderComponent(props);
        const selectElement = screen.getByRole('select');

        fireEvent.change(selectElement, { target: { value: testGenreList[2]}});

        expect(callbackFn).toHaveBeenCalledWith('option c');
    });
});
