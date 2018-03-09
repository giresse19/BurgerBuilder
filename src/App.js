import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
        {name: 'Max', age:24},
        {name:'Manu', age:28},
        {name:'Bob', age:22}
    ],
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({persons});

}

  nameChangeHandler = (event)=> {
      this.setState({
          persons: [
              {name: 'Max', age:24},
              {name:event.target.value, age:28},
              {name:'Bob', age:26}
          ]})

  }


    togglesPersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons:!doesShow
        });
    }

  render() {

    const style ={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        click ={this.deletePersonHandler.bind(this, index)}
                        name={person.name}
                        age={name.age} />
                })}
            </div>
        );
    }

    return (
      <div className="App">
           <h1>Hi, welcome to React</h1>
          <button
              style={style}
              onClick={this.togglesPersonHandler}>Switch Name
          </button>
          {persons}

      </div>
    );
  }
}

export default App;
