import React, {Component, createElement} from 'react';
import './App.css';
import SearchForm from "./searchform/SearchForm";
import Counter from "./counter/Counter";
import MoviesByGenre from "./moviesByGenre/MoviesByGenre";

class App extends Component {
    render() {
        return createElement("div", null,
            createElement(Counter, null),
            createElement(SearchForm,null),
            createElement(MoviesByGenre,null),
        );
    }
}

export default App;
