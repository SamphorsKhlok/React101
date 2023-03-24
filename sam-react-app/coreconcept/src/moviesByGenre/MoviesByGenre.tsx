import React, {Component, ChangeEvent} from "react";

class MoviesByGenre extends Component {
    state = {
        genre: ["All", "Comedy", "Horror", "Crime", "Adventure", "Action"],
        selectedGenre: 'All',
        moviesMap: new Map([
            ['Kill bill', ["Crime", "Adventure", "Horror", "All"]],
            ["Inception", ["Action", "Adventure", "All"]],
            ["Avenger Infinity War", ["Action", "All"]],
            ["Pulp Fiction", ["Action", "Adventure", "All"]],
            ["War Lord", ["Comedy", "Crime", "All"]],
        ]),
    };
    handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event?.target.value ?? "All";
        this.setState({
            selectedGenre: value,
        });
    }
    render(){
        return <div>
            <p>-------------- Genre select component --------------</p>
            <select id="select-genre" value={this.state.selectedGenre} onChange={this.handleOptionChange}>
                {this.state.genre.map((genre)=>(<option key={genre} value={genre}>{genre}</option>))}
            </select>
            <ul>
                {Array.from(this.state.moviesMap.keys()).filter((title)=>(this.state.moviesMap.get(title)?.includes(this.state.selectedGenre))).map((title) => (
                    <li key={title}><b>{title}</b> ({this.state.moviesMap.get(title)?.join(", ")})</li>
                ))}
            </ul>
            <p>--------------  end of genre select component --------------</p>
            <br/>
        </div>
    }
}
export default MoviesByGenre