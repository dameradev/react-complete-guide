import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: "213", name: "Max", age: 28 },
      { id: "233", name: "Manu", age: 29 },
      { id: "41rdf", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!'));
}

export default App;
