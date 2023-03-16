import logo from './logo.svg';
import './App.css';
import React, {Component, createElement} from 'react';

class App extends Component {
    state = {
        counter: 0,
    };

    handleOnClick = (event) => {
        const componentName = event.target.ariaLabel;
        let counter = Number(event.target.value);
        this.setState({
            counter: componentName === 'increment' ? counter + 1 : counter - 1,
        });
    }

    handleInputChange = (event) => {
        this.setState({
            counter: Number(event.target.value),
        });
    }

    render() {
        return createElement(
            "h3",
            null,
            'React counter component.',
            createElement(
                'br',
                null,
                null,
            ),
            createElement(
                'input',
                {onChange: event => this.handleInputChange(event)},
                null,
            ),
            createElement(
                'br',
                null,
                null,
            ),
            createElement(
                'button',
                {onClick: event => this.handleOnClick(event), "aria-label": "decrement", value: this.state.counter},
                'decrement -1',
            ),
            createElement(
                'div',
                null,
                'counter: ' + this.state.counter,
            ),
            createElement(
                'button',
                {onClick: event => this.handleOnClick(event), "aria-label": "increment", value: this.state.counter},
                'increment +1',
            ),
        );
    }
}

export default App;
