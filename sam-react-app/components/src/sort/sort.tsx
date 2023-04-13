import React, {ChangeEvent, Component} from "react";

type SortComponentState = {
    selectedOption: string;
    options: string[];
}
type SortComponentProps = {
    selectedOption: string;
    onSelectCallback: (event: ChangeEvent<HTMLSelectElement>) => void;
}

class Sort extends Component<SortComponentProps, SortComponentState> {
    constructor(props: SortComponentProps) {
        super(props);
        this.state = {
            selectedOption: this.props.selectedOption,
            options: ["Release Date", "Title"]
        };
    }

    handleOnChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        this.setState({
            selectedOption: event.target.value
        });
        this.props.onSelectCallback(event);
    }

    render() {
        return <>
            <select role="select" id="select" value={this.state.selectedOption} onChange={this.handleOnChange}>
                {this.state.options.map((option)=>(<option key={option} value={option}>{option}</option>))}
            </select>
        </>
    }
}

export default Sort