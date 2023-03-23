import React, {Component, createElement} from "react";

class SearchForm extends Component {
    handleOnClick = (event: Event) => {
        this.searchOperation();
    }
    handleKeyDown = (event: KeyboardEvent) => {
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
        return createElement(
            "div",
            null,
            '-------------- Search form component -------------- ',
            createElement(
                'br',
                null
            ),
            createElement(
                'input',
                {onKeyDown: (event: KeyboardEvent) => this.handleKeyDown(event), "id":"searchKeyword"},
                null,
            ),
            createElement(
                'button',
                {onClick: (event: Event) => this.handleOnClick(event), "id": "searchButton"},
                'Search',
            ),
            createElement(
                'div',
                null,
                '--------------  end of search form component -------------- ',
            ),
            createElement(
                'br',
                null
            )
        );
    }
}

export default SearchForm