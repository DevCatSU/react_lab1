import Pet from "./Pet";
function Pets(props) {
    return(
        <div>
             {props.animalDetails.map(function(iterator, index){
        return(
          <Pet key={index}
            name ={iterator.name}
            age ={iterator.age}
            colour ={iterator.colour}
          />
        )
      })}
        </div>
    );

}

export default Pets;