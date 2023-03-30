import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from "./Counter";

describe('CounterTest', () => {
    it('renders correctly with initial value 5', () => {
        const { getByText } = render(<Counter initialValue='5' />);

        expect(getByText('counter: 5')).toBeInTheDocument();
    });

    it('test click on decrement, expect counter to be 4', () => {
        const { getByText } = render(<Counter initialValue='5' />);
        const decrementButton = getByText('decrement -1');

        fireEvent.click(decrementButton);

        expect(getByText('counter: 4')).toBeInTheDocument();
    });

    it('test click on increment, expect counter to be  6', () => {
        const { getByText } = render(<Counter initialValue='5' />);
        const incrementButton = getByText('increment +1');

        fireEvent.click(incrementButton);

        expect(getByText('counter: 6')).toBeInTheDocument();
    });
});
