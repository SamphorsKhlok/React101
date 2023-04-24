import React, {Component} from 'react';
import './App.css';
import SearchForm from "./searchform/SearchForm";
import Counter from "./counter/Counter";
import MoviesByGenre from "./moviesByGenre/MoviesByGenre";
import Dialog from "./dialog/Dialog";
import MovieForm, {ActionType} from "./movieForm/MovieForm";

type AppComponentState = {
    genreList: string[];
    selectedGenre: string;
    isDialogOpen: boolean,
}

class App extends Component<any, AppComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            genreList: ["All", "Comedy", "Horror", "Crime", "Adventure", "Action"],
            selectedGenre: 'All',
            isDialogOpen: false,
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

    toggleDialog = () => {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen,
        })
    }

    addMovieAction = () => {
        console.log("Add movie");
    }

    render() {
        const dialogContent = this.state.isDialogOpen ? (
            <Dialog title="Default dialog title" onDialogClose={this.toggleDialog}>
                <div>This is a default dialog body.</div>
            </Dialog>
        ) : null;
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
            <div>
                <p>toggle dialog</p>
                <button onClick={this.toggleDialog}>toggle generic dialog</button>
                {dialogContent}
            </div>
            <MovieForm initialMovieInfo={null} callbackSubmitAction={this.addMovieAction} actionType={ActionType.ADD} />
        </div>
    }
}

export default App;
