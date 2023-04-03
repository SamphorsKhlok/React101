import React, {Component, ChangeEvent} from "react";

type MoviesByGenreComponentState = {
    moviesMap: Map<string, string[]>;
}
type MoviesByGenreComponentProps = {
    genreList: string[];
    selectedGenre: string;
    onSelect: (event: ChangeEvent<HTMLSelectElement>)=> void;
}
class MoviesByGenre extends Component<MoviesByGenreComponentProps, MoviesByGenreComponentState> {
    constructor(props: MoviesByGenreComponentProps) {
        super(props);
        this.state = {
            moviesMap: new Map([
                ['Kill bill', ["Crime", "Adventure", "Horror", "All"]],
                ["Inception", ["Action", "Adventure", "All"]],
                ["Avenger Infinity War", ["Action", "All"]],
                ["Pulp Fiction", ["Action", "Adventure", "All"]],
                ["War Lord", ["Comedy", "Crime", "All"]],
            ]),
        };
    }
    render(){
        let moviesBySelectedGenre = Array.from(this.state.moviesMap.keys()).filter((title)=>
            this.state.moviesMap.get(title)?.includes(this.props.selectedGenre));
        return <div>
            <p>-------------- Genre select component --------------</p>
            <select role="select" id="select-genre" value={this.props.selectedGenre} onChange={this.props.onSelect}>
                {this.props.genreList.map((genre)=>(<option key={genre} value={genre}>{genre}</option>))}
            </select>
            <ul>
                {moviesBySelectedGenre.map((title) => (
                    <li key={title}><b>{title}</b> ({this.state.moviesMap.get(title)?.join(", ")})</li>
                ))}
            </ul>
            <p>--------------  end of genre select component --------------</p>
            <br/>
        </div>
    }
}
export default MoviesByGenre