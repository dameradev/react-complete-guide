import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState("some other value");
  console.log(otherState, personsState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Damjan", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 21 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi I'm a React app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: basketball
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
// state = {
//   persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age:29},
//     {name: 'Stephanie', age:26}
//   ]
// }

// switchNameHandler = () => {
//   this.setState({persons: [
//     {name: 'Damjan', age: 28},
//     {name: 'Manu', age:29},
//     {name: 'Stephanie', age:21}
//   ]});
// }
