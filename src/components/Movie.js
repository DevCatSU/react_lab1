function Movie(props) {
    return(
        <div>
            <h1>Movies: {props.name}</h1>
            <h3>Director: {props.dir} / Genre: {props.gen} / released: {props.year}</h3>
            <hr/>
        </div>
    );

}

export default Movie;