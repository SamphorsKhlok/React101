import React, {Component, MouseEvent} from "react";

type MovieTileComponentState = {
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genreList: string[];
}
type MovieTileComponentProps = {
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genreList: string[];
    onClickCallback: (event: MouseEvent<HTMLDivElement>) => void;
}

class MovieTile extends Component<MovieTileComponentProps, MovieTileComponentState> {
    constructor(props: MovieTileComponentProps) {
        super(props);
        this.state = {
            imageUrl: this.props.imageUrl,
            movieName: this.props.movieName,
            releaseYear: this.props.releaseYear,
            genreList: this.props.genreList,
        };
    }

    handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
        this.props.onClickCallback(event);
    }

    render() {
        return <>
            <div role="button" onClick={this.handleOnClick}>
                <img src={this.state.imageUrl} alt="movie poster"/>
                <div>
                    <h3>{this.state.movieName}</h3>
                    <p>{this.state.releaseYear}</p>
                </div>
                <div>
                    <p>{this.state.genreList.join(", ")}</p>
                </div>
            </div>
        </>
    }
}

export default MovieTile