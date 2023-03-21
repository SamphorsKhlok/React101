import React, {Component, createElement} from 'react';
import './App.css';

class App extends Component {
    state = {
        counter: 0,
    };

    handleOnClick = (event: Event) => {
        const element = event?.target as HTMLElement;
        const componentId = element.getAttribute('id');
        this.setState({
            counter: componentId === 'increment' ? this.state.counter + 1 : this.state.counter - 1,
        });
    }

    handleInputChange = (event: Event) => {
        const inputElement = event?.target as HTMLInputElement;
        this.setState({
            counter: Number(inputElement.value),
        });
    }

    render() {
        return createElement(
            "h3",
            null,
            'React counter component.',
            createElement(
                'br',
                null
            ),
            createElement(
                'input',
                {onChange: (event: Event) => this.handleInputChange(event)},
                null,
            ),
            createElement(
                'br',
                null
            ),
            createElement(
                'button',
                {onClick: (event: Event) => this.handleOnClick(event), "id": "decrement"},
                'decrement -1',
            ),
            createElement(
                'div',
                null,
                'counter: ' + this.state.counter,
            ),
            createElement(
                'button',
                {onClick: (event: Event) => this.handleOnClick(event), "id": "increment"},
                'increment +1',
            ),
        );
    }
}

export default App;
