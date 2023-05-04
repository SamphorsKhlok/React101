import React, {ChangeEvent, Component, KeyboardEvent} from "react";
import Dialog from "../dialog/Dialog";
import {MovieType} from "../common/types";
import './MovieForm.css';

const defaultMovie: MovieType = {
    title: "",
    url: "",
    releaseDate: "",
    rating: 0,
    duration: 0,
    description: "",
    genre: [],
}

type MovieFormComponentState = {
    isDialogOpen: boolean,
    currentMovie: MovieType | null,
}

type MovieFormComponentProps = {
    initialMovieInfo: MovieType | null;
    callbackSubmitAction: () => void;
}

class MovieForm extends Component<MovieFormComponentProps, MovieFormComponentState> {
    constructor(props: MovieFormComponentProps) {
        super(props);
        this.state = {
            isDialogOpen: false,
            currentMovie: this.props.initialMovieInfo,
        };
    }

    getFormTitle = (): string => {
        if(this.props.initialMovieInfo === null){
            return "Add movie";
        }else{
            return "Edit movie";
        }
    }
    onFormSubmit = () => {
        this.props.callbackSubmitAction();
    }
    createAddOrEditForm = () => {
        const movie = this.state.currentMovie ?? defaultMovie;
        return <div>
            <div className="col50">
                <div className="fieldBlock">
                    <label>Title</label>
                    <input type="text" value={movie.title}/>
                </div>
                <div className="fieldBlock">
                    <label>Movie Url</label>
                    <input type="text" value={movie.url}/>
                </div>
                <div className="fieldBlock">
                    <label>Genre</label>
                    <input type="text" value={movie.genre.join(", ")}/>
                </div>
                <div className="fieldBlock">
                    <label>Release date</label>
                    <input type="date" value={movie.releaseDate}/>
                </div>
                <div className="fieldBlock">
                    <label>Rating</label>
                    <input type="text" value={movie.rating}/>
                </div>
                <div className="fieldBlock">
                    <label>Runtime</label>
                    <input type="text" value={movie.duration}/>
                </div>
            </div>
            <div className="col100">
                <div className="fieldBlock">
                    <label>Overview</label>
                    <input type="text" value={movie.description}/>
                </div>
            </div>
        </div>;
    }
    toggleFormDialog = () => {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen,
        })
    }
    render() {
        const formDialog = this.state.isDialogOpen ? (
            <Dialog title={this.getFormTitle()} onDialogClose={this.toggleFormDialog}>
                <form onSubmit={this.onFormSubmit} className="form">
                    {this.createAddOrEditForm()}
                    <div className="buttonContainer">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </Dialog>
        ) : null;
        return <div>
            <button onClick={this.toggleFormDialog}>open movie form</button>
            {formDialog}
        </div>
    }
}

export default MovieForm;
