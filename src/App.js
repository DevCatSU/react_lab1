import Movies from "./components/Movies";
function App() {
  var movieDetails=[
    {
      name: "Gone with the Wind",
      dir: "Victor Fleming",
      gen: "Historical romance",
      year: "1939",
    },
    {
      name: "The Wizard of Oz",
      dir: "Victor Fleming",
      gen: "Family/Musical",
      year: "1939",
    },
    {
      name: "Roman Holiday",
      dir: "William Wyler",
      gen: "Comedy/Romance",
      year: "1953",
    },
    {
      name: "The Godfather",
      dir: "Francis Ford Coppola",
      gen: "Crime",
      year: "1972",
    },
    {
      name: "The Truman Show",
      dir: "Peter Weir",
      gen: "Comedy/Sci-fi",
      year: "1998",
    },
  
  ];

  return (
    <div>
      <Movies movieDetails={movieDetails}/>
    </div>
  );

 /* return (
    <div>
      <Pet name="Tigr" age="5" colour="taby"/>
      <Pet name="Fluffy" age="3" colour="grey"/>
      <Pet name="Boby" age="5" colour="red"/>
    </div>
  );*/

  
}

export default App;
