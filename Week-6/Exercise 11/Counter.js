import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    sayHello = () => {
        alert("Hello! Welcome to React Events.");
    };

    sayWelcome = (message) => {
        alert(message);
    };

    handleClick = () => {
        alert("I was clicked");
    };

    handleIncrement = () => {
        this.increment();
        this.sayHello();
    };

    render() {

        return (

            <div>

                <h2>Counter Value : {this.state.count}</h2>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.handleClick}>
                    OnPress
                </button>

            </div>

        );
    }

}

export default Counter;
