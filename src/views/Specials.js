import React, { Component } from 'react';
import './Specials.css';


export default class Specials extends Component {

    constructor(props) {
        super(props)
        // this.props.clickFunc contains what to do when we click something
    }

    ourChoice(choice) {
      console.log("hi")
      this.props.clickFunc(choice)
      /// do some more stuff here
    }

    render() {

        return (
        <div >

      <header className="App-header">
        Today's Specials  
      </header>
       
      <div>
      <p onClick={this.ourChoice.bind(this, "cheese")}>Cheese</p>
      </div>

      <div>
      <p onClick={this.ourChoice.bind(this, "pep")}>Pepperoni</p>
      </div>

      <div>
      <p onClick={this.ourChoice.bind(this, "supreme")}>Supreme</p>
      </div>
      
    </div>
    )
    }
}


