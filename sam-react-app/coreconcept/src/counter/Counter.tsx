import React, {ChangeEvent, Component, createElement} from "react";

type CounterComponentState = {
    counter: number;
}
class Counter extends Component<any, CounterComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter:0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            counter: Number(event.target.value),
        });
    }
    increment = ()=>{
        this.setState((previousState) => ({
            counter: previousState.counter + 1,
        }));
    }
    decrement = ()=>{
        this.setState((previousState) => ({
            counter: previousState.counter - 1,
        }));
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
                {onChange: this.handleInputChange},
                null,
            ),
            createElement(
                'br',
                null
            ),
            createElement(
                'button',
                {onClick: this.decrement},
                'decrement -1',
            ),
            createElement(
                'div',
                null,
                'counter: ' + this.state.counter,
            ),
            createElement(
                'button',
                {onClick: this.increment},
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