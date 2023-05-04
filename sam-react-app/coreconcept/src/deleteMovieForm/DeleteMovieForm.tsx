import React, {ChangeEvent, Component, KeyboardEvent} from "react";
import Dialog from "../dialog/Dialog";
import {MovieType} from "../common/types";
import './DeleteMovieForm.css';

type DeleteMovieFormComponentState = {
    isDialogOpen: boolean,
    currentMovie: MovieType | null,
}

type DeleteMovieFormComponentProps = {
    initialMovieInfo: MovieType | null;
    callbackSubmitAction: () => void;
}

class DeleteMovieForm extends Component<DeleteMovieFormComponentProps, DeleteMovieFormComponentState> {
    constructor(props: DeleteMovieFormComponentProps) {
        super(props);
        this.state = {
            isDialogOpen: false,
            currentMovie: this.props.initialMovieInfo,
        };
    }
    onFormSubmit = () => {
        this.props.callbackSubmitAction();
    }
    toggleFormDialog = () => {
        this.setState({
            isDialogOpen: !this.state.isDialogOpen,
        })
    }
    render() {
        const formDialog = this.state.isDialogOpen ? (
            <Dialog title="Delete movie" onDialogClose={this.toggleFormDialog}>
                <form onSubmit={this.onFormSubmit} className="form">
                    <div>Are you sure you want to delete this movie?</div>
                    <div className="buttonContainer">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </Dialog>
        ) : null;
        return <div>
            <button onClick={this.toggleFormDialog}>open delete movie form</button>
            {formDialog}
        </div>
    }
}

export default DeleteMovieForm;
