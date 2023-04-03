import React, {Component, ChangeEvent} from "react";

type MoviesByGenreComponentState = {
    moviesMap: Map<string, string[]>;
    selectedGenre: string;
}
type MoviesByGenreComponentProps = {
    genreList: string[];
    selectedGenre: string;
    onSelect: (value:string)=> void;
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
            selectedGenre: this.props.selectedGenre,
        };
    }
    handleOnChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        const selectedValue = event.target.value;
        this.setState({
            selectedGenre: selectedValue,
        });
        this.props.onSelect(selectedValue);
    }
    render(){
        let moviesBySelectedGenre = Array.from(this.state.moviesMap.keys()).filter((title)=>
            this.state.moviesMap.get(title)?.includes(this.state.selectedGenre));
        return <div>
            <p>-------------- Genre select component --------------</p>
            <select role="select" id="select-genre" value={this.state.selectedGenre} onChange={this.handleOnChange}>
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