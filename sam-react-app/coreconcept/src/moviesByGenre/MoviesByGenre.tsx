import React, {Component, createElement} from "react";

class MoviesByGenre extends Component {
    state = {
        genre: ["All", "Documentary", "Comedy", "Horror", "Crime", "Adventure", "Action"],
        selectedGenre: 'All',
        moviesMap: new Map([
            ['Kill bill', ["Crime", "Adventure", "Horror", "All"]],
            ["Inception", ["Action", "Adventure", "All"]],
            ["Avenger Infinity War", ["Action", "All"]],
            ["Pulp Fiction", ["Action", "Adventure", "All"]],
            ["War Lord", ["Comedy", "Crime", "All"]],
        ]),
    };
    generateSelectOptions(){
        return(
            <select id="select-genre" value={this.state.selectedGenre} onChange={this.handleOptionChange}>
                {this.state.genre.map((genre)=>(<option key={genre} value={genre}>{genre}</option>))}
            </select>
        );
    }

    handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event?.target.value ?? "All";
        this.setState({
            selectedGenre: value,
        });
    }

    generateMovieListByGenre(){
        return(
            <ul>
                {Array.from(this.state.moviesMap.keys()).filter((key)=>(this.state.moviesMap.get(key)?.includes(this.state.selectedGenre))).map((movie) => (
                    <li key={movie}><b>{movie}</b> ({this.state.moviesMap.get(movie)?.join(", ")})</li>
                ))}
            </ul>
        );
    }
    render(){
        return createElement(
            "div",
            null,
            '-------------- Genre select component -------------- ',
            createElement(
                'br',
                null
            ),
            this.generateSelectOptions(),
            this.generateMovieListByGenre(),
            createElement(
                'div',
                null,
                '--------------  end of genre select component -------------- ',
            ),
            createElement(
                'br',
                null
            ),
        )
    }
}
export default MoviesByGenre