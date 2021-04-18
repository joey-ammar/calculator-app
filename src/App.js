import React, { Component } from "react";

/*
  Importing other components 
*/
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { ClearButton } from "./components/Clear/ClearButton";
/*
  importing math js
*/
import * as math from "mathjs";
/*
  Import styling
*/
import "./App.css";

class App extends Component {
  /**
   * Managing the state
   */
  state = {
    input: "",
  };
  /**
   * Add function
   */

  calculate = (value) => {
    /*
     *Adding to the state the value
     */
    this.setState({ input: this.state.input + value });
  };
  /*

  */
  result = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  clear = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="Main">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button click={this.calculate}>7</Button>
            <Button click={this.calculate}>8</Button>
            <Button click={this.calculate}>9</Button>
            <Button click={this.calculate}>/</Button>
          </div>
          <div className="row">
            <Button click={this.calculate}>4</Button>
            <Button click={this.calculate}>5</Button>
            <Button click={this.calculate}>6</Button>
            <Button click={this.calculate}>*</Button>
          </div>
          <div className="row">
            <Button click={this.calculate}>1</Button>
            <Button click={this.calculate}>2</Button>
            <Button click={this.calculate}>3</Button>
            <Button click={this.calculate}>+</Button>
          </div>
          <div className="row">
            <Button click={this.calculate}>.</Button>
            <Button click={this.calculate}>0</Button>
            <Button click={() => this.result()}>=</Button>
            <Button click={this.calculate}>-</Button>
          </div>
          <div className="row">
            <ClearButton clear={this.clear}>C</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
