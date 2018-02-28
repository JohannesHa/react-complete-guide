import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    persons: [
      {name: 'Joooohannes'}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Sabrina'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value}
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '20px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1 className="App-title">Hi I am learning React</h1>

        <button style={style}>test me out!</button>

        <Person 
          name={this.state.persons[0].name} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      </div>
    );
  }
}
  
export default App;
