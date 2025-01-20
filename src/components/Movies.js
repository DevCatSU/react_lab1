import Movie from "./Movie";
function Movies(props) {
    return(
        <div>
             {props.movieDetails.map(function(iterator, index){
        return(
          <Movie key={index}
            name ={iterator.name}
            dir ={iterator.dir}
            gen ={iterator.gen}
            year ={iterator.year}
          />
        )
      })}
        </div>
    );

}

export default Movies;