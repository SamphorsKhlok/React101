import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe('SearchFormTest', () => {
    it('renders correctly with initial query', () => {
        render(<SearchForm initialQuery='hello world' onSearch={()=>{}}/>);

        expect(screen.getByDisplayValue('hello world')).toBeInTheDocument();
    });

    it('with user typed in input, test click submit, expect callback function is called', async () => {
        const callbackFn = jest.fn();
        render(<SearchForm initialQuery='' onSearch={callbackFn}/>);

        await userEvent.type(screen.getByRole("textbox"), "find me");
        fireEvent.click(screen.getByText('Search'));

        expect(callbackFn).toHaveBeenCalledWith("find me");
    });

    it('with user typed an input, test press enter, expect callback function is called', async () => {
        const callbackFn = jest.fn();
        render(<SearchForm initialQuery='' onSearch={callbackFn}/>);

        await userEvent.type(screen.getByRole("textbox"), "find me 2");
        userEvent.keyboard("{enter}");

        expect(callbackFn).toHaveBeenCalledWith("find me 2");
    });
});
