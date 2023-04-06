import React, {ChangeEvent, Component, createElement, KeyboardEvent} from 'react';
import './App.css';
import SearchForm from "./searchform/SearchForm";
import Counter from "./counter/Counter";
import MoviesByGenre from "./moviesByGenre/MoviesByGenre";

type AppComponentState = {
    genreList: string[];
    selectedGenre: string;
}
class App extends Component<any, AppComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            genreList: ["All", "Comedy", "Horror", "Crime", "Adventure", "Action"],
            selectedGenre: 'All',
        };
    }
    onSelectCallback = (value: string) => {
        this.setState({
            selectedGenre: value,
        });
    }
    onSearchCallback = (keyword: string) => {
        console.log(keyword);
    }
    render() {
        return <div>
            learn react
            <Counter initialValue="10"/>
            <SearchForm
                initialQuery="type here..."
                onSearch={this.onSearchCallback}
            />
            <MoviesByGenre
                genreList={this.state.genreList}
                selectedGenre={this.state.selectedGenre}
                onSelect={this.onSelectCallback}
            />
        </div>
    }
}

export default App;
