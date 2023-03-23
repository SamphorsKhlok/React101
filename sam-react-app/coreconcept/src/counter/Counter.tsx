import React, {Component, createElement} from "react";

class Counter extends Component {
    state = {
        counter: 0,
    };
    handleOnClick = (event: Event) => {
        const element = event?.target as HTMLElement;
        const componentId = element.getAttribute('id');
        switch(componentId){
            case 'increment':
                this.setState({
                    counter: this.state.counter + 1,
                });
                break;
            case 'decrement':
                this.setState({
                    counter: this.state.counter - 1,
                });
                break;
            default:
                throw Error('Unknown action');
        }
    }
    handleInputChange = (event: Event) => {
        const inputElement = event?.target as HTMLInputElement;
        this.setState({
            counter: Number(inputElement.value),
        });
    }
    render(){
        return createElement(
            "div",
            null,
            '-------------- React counter component -------------- ',
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
            createElement(
                'div',
                null,
                '--------------  end of counter component -------------- ',
            ),
            createElement(
                'br',
                null
            ));
    }
}
export default Counter