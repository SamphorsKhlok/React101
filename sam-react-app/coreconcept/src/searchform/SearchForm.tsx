import React, {ChangeEvent, Component, KeyboardEvent} from "react";

type SearchFormComponentState = {
    keyword: string;
}
type SearchFormComponentProps = {
    initialQuery: string;
    onSearch: (keyword: string)=> void;
}
class SearchForm extends Component<SearchFormComponentProps, SearchFormComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            keyword:"",
        };

        this.updateKeyword = this.updateKeyword.bind(this);
    }
    handleOnClick = () => {
        this.onSearch();
    }
    handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if(event.key === "Enter"){
            this.onSearch();
        }
    }
    onSearch(){
        this.props.onSearch(this.state.keyword);
    }
    updateKeyword(event: ChangeEvent<HTMLInputElement> ){
        this.setState({
            keyword: event.target.value
        })
    }
    render(){
        return <div>
            <p>-------------- Search form component --------------</p>
            <input defaultValue={this.props.initialQuery} onChange={this.updateKeyword}
                   onKeyDown={this.handleKeyDown} />
            <button type="button" onClick={this.handleOnClick}>Search</button>
            <p>--------------  end of search form component --------------</p>
            <br/>
        </div>
    }
}
export default SearchForm