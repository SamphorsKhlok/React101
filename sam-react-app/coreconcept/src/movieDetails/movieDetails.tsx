import React, {Component} from "react";

type Movie = {
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    rating: number,
    duration: number,
    description: string,
}

type MovieDetailsComponentState = {
    movie: Movie
}
type MovieDetailsComponentProps = {
    movie: Movie
}

class MovieDetails extends Component<MovieDetailsComponentProps, MovieDetailsComponentState> {
    constructor(props: MovieDetailsComponentProps) {
        super(props);
        this.state = {
            movie: this.props.movie,
        };
    }

    render() {
        return <>
            <div>
                <img src={this.state.movie.imageUrl} alt="movie poster"/>
            </div>
            <div>
                <h3>{this.state.movie.movieName}</h3>
                <p>{this.state.movie.description}</p>
                <p>{this.state.movie.releaseYear}</p>
                <p>{this.state.movie.rating}</p>
                <p>{this.state.movie.duration}</p>
            </div>
        </>
    }
}

export default MovieDetails