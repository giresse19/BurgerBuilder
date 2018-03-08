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

  switchNameHandler = (newName) => {
    // console.log('was clicked')
     // dont. do it this.state.persons[0].name = 'Maximillian';
      this.setState({
          persons: [
              {name: newName, age:24},
              {name:'Manu', age:28},
              {name:'Bob', age:25}
          ]})
  }

  nameChangeHandler = (event)=> {
      this.setState({
          persons: [
              {name: 'Max', age:24},
              {name:event.target.value, age:28},
              {name:'Bob', age:26}
          ]})

  }
  render() {
    const style ={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

      togglesPersonHandler = () => {
          const doesShow = this.state.showPersons;
          this.set

      }

    return (
      <div className="App">
           <h1>Hi, welcome to React</h1>
          <button
              style={style}
              onClick={this.togglesPersonHandler}>Switch Name</button>
          {
          this.state.showPersons === true ?
              <div>
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age} />
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age} />
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}
                      click={this.switchNameHandler.bind(this, 'maxi')}
                      changed={this.nameChangeHandler}> my hobbies: reading
                  </Person>
              </div> : null
          }

      </div>
    );
  }
}

export default App;
