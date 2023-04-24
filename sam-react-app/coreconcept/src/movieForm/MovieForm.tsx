import React, {ChangeEvent, Component, KeyboardEvent} from "react";
import Dialog from "../dialog/Dialog";

type MovieType = {
    title: string;
    url: string;
    releaseDate: string;
    rating: number;
    duration: number;
    description: string;
    genre: string[];
}

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

export enum ActionType {
    NONE = 0,
    ADD = 1,
    EDIT = 2,
    DELETE = 3,
}

type MovieFormComponentProps = {
    initialMovieInfo: MovieType | null;
    callbackSubmitAction: () => void;
    actionType: ActionType,
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
        switch (this.props.actionType) {
            case ActionType.ADD:
                return "Add movie";
            case ActionType.EDIT:
                return "Edit movie";
            case ActionType.DELETE:
                return "Delete movie";
            default:
                break;
        }
        return "Default dialog title";
    }
    getFormContent = (): JSX.Element => {
        switch (this.props.actionType) {
            case ActionType.ADD:
            case ActionType.EDIT:
                return this.createAddOrEditForm();
            case ActionType.DELETE:
                return this.createDeleteForm();
            default:
                break;
        }
        return <div>Default dialog content.</div>
    }
    onFormSubmit = () => {
        this.props.callbackSubmitAction();
    }
    createAddOrEditForm = () => {
        const movie = this.state.currentMovie ?? defaultMovie;
        return <div>
            <div>
                <label>Title:</label>
                <input type="text" value={movie.title}/>
            </div>
            <div>
                <label>Movie Url:</label>
                <input type="text" value={movie.url}/>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" value={movie.genre.join(", ")}/>
            </div>
            <div>
                <label>Release date:</label>
                <input type="date" value={movie.releaseDate}/>
            </div>
            <div>
                <label>Rating:</label>
                <input type="text" value={movie.rating}/>
            </div>
            <div>
                <label>Runtime:</label>
                <input type="text" value={movie.duration}/>
            </div>
            <div>
                <label>Overview:</label>
                <input type="text" value={movie.description}/>
            </div>
        </div>;
    }
    createDeleteForm = () => {
        return <div>Are you sure you want to delete this movie?</div>;
    }
    toggleFormDialog = () => {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen,
        })
    }
    render() {
        const formDialog = this.state.isDialogOpen ? (
            <Dialog title={this.getFormTitle()} onDialogClose={this.toggleFormDialog}>
                <form onSubmit={this.onFormSubmit}>
                    {this.getFormContent()}
                    <div>
                        <button type="submit">Submit</button>
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
