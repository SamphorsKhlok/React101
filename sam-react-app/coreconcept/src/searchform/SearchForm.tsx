import React, {ChangeEvent, Component, KeyboardEvent} from "react";

type SearchFormComponentState = {
    keyword: string;
}
type SearchFormComponentProps = {
    initialQuery: string;
    onSearch: (keyword: string)=> void;
}
class SearchForm extends Component<SearchFormComponentProps, SearchFormComponentState> {
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.state = {
            keyword: this.props.initialQuery ?? "",
        };
    }
    handleOnClick = () => {
        this.props.onSearch(this.state.keyword);
    }
    handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            this.props.onSearch(this.state.keyword);
        }
    }
    updateKeyword = (event: ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            keyword: event.target.value,
        })
    }
    render(){
        return <div>
            <p>-------------- Search form component --------------</p>
            <input type="textbox" value={this.state.keyword} onChange={this.updateKeyword}
                   onKeyDown={this.handleKeyDown} />
            <button type="button" onClick={this.handleOnClick}>Search</button>
            <p>--------------  end of search form component --------------</p>
            <br/>
        </div>
    }
}
export default SearchForm