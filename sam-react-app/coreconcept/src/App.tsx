import React, {Component} from 'react';
import './App.css';
import Dialog from "./dialog/Dialog";
import MovieForm from "./movieForm/MovieForm";
import DeleteMovieForm from "./deleteMovieForm/DeleteMovieForm";
import {MovieType} from "./common/types";

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
        const dialogContent = this.state.isDialogOpen && (
            <Dialog title="Default dialog title" onDialogClose={this.toggleDialog}>
                <div>This is a default dialog body.</div>
            </Dialog>
        );
        const initialMovie: MovieType = {
            title: "John Wick",
            url: "xyz",
            releaseDate: "2023",
            rating: 8,
            duration: 250,
            description: "One of the best action movie",
            genre: ["Action", "Thriller"],
        }
        return <div className="appBackground">
            learn react
            <div>
                <p>toggle dialog</p>
                <button onClick={this.toggleDialog}>toggle generic dialog</button>
                {dialogContent}
            </div>
            <MovieForm initialMovieInfo={initialMovie} callbackSubmitAction={this.addMovieAction} />
            <MovieForm initialMovieInfo={null} callbackSubmitAction={this.addMovieAction} />
            <DeleteMovieForm initialMovieInfo={null} callbackSubmitAction={this.addMovieAction} />
        </div>
    }
}

export default App;
