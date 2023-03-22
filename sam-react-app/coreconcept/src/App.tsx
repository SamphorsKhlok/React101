import React, {Component, createElement} from 'react';
import './App.css';

class App extends Component {
    state = {
        counter: 0,
        genre: ["All", "Documentary", "Comedy", "Horror", "Crime", "Adventure", "Action"],
        selectedGenre: 'All',
        moviesMap: new Map([
            ['Kill bill', ["Crime", "Adventure", "Horror", "All"]],
            ["Inception", ["Action", "Adventure", "All"]],
            ["Avenger Infinity War", ["Action", "All"]],
            ["Pulp Fiction", ["Action", "Adventure", "All"]],
            ["War Lord", ["Comedy", "Crime", "All"]],
        ]),
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
            case 'searchButton':
                this.searchOperation();
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

    generateSelectOptions(){
        return(
            <select id="select-genre" onChange={this.handleOptionChange}>
                {this.state.genre.map((genre)=>(<option value={genre} selected={genre === this.state.selectedGenre}>{genre}</option>))}
            </select>
        );
    }

    handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event?.target.value ?? "All";
        this.setState({
            selectedGenre: value,
        });
    }

    generateMovieListByGenre(){
        return(
            <ul>
                {Array.from(this.state.moviesMap.keys()).filter((key)=>(this.state.moviesMap.get(key)?.includes(this.state.selectedGenre))).map((movie) => (
                    <li key={movie}><b>{movie}</b> ({this.state.moviesMap.get(movie)?.join(", ")})</li>
                ))}
            </ul>
        );
    }

    render() {
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
            ),
            createElement(
                "div",
                null,
                '-------------- Search form component -------------- ',
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
            ),
            createElement(
                "div",
                null,
                '-------------- Genre select component -------------- ',
            ),
            this.generateSelectOptions(),
            this.generateMovieListByGenre(),
            createElement(
                'div',
                null,
                '--------------  end of genre select component -------------- ',
            ),
        );
    }
}

export default App;
