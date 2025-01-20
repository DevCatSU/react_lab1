function Pet(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>Age: {props.age} * Colour: {props.colour}</h3>
            <hr/>
        </div>
    );

}

export default Pet;