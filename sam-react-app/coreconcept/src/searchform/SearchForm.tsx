import React, {Component, createElement, KeyboardEvent} from "react";

class SearchForm extends Component {
    state = {
        keyword:"",
    };
    handleOnClick = () => {
        this.searchOperation();
    }
    handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            this.searchOperation();
        }
    }
    searchOperation(){
        const searchKeywordElement = document.getElementById("searchKeyword") as HTMLInputElement;
        this.onSearch(searchKeywordElement.value);
    }
    onSearch(keyword: string){
        console.log("searching for " + keyword);
    }
    render(){
        return <div>
            <p>-------------- Search form component --------------</p>
            <input id='searchKeyword' onKeyDown={this.handleKeyDown} />
            <button id='searchButton' onClick={this.handleOnClick}>Search</button>
            <p>--------------  end of search form component --------------</p>
            <br/>
        </div>
    }
}
export default SearchForm