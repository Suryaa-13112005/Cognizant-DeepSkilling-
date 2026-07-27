import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class App extends Component {

    constructor() {

        super();

        this.state = {

            isLoggedIn: false

        };

    }

    login = () => {

        this.setState({

            isLoggedIn: true

        });

    };

    logout = () => {

        this.setState({

            isLoggedIn: false

        });

    };

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "30px" }}>

                <h1>Ticket Booking App</h1>

                {
                    this.state.isLoggedIn ?

                        <div>

                            <User />

                            <br />

                            <button onClick={this.logout}>
                                Logout
                            </button>

                        </div>

                        :

                        <div>

                            <Guest />

                            <br />

                            <button onClick={this.login}>
                                Login
                            </button>

                        </div>

                }

            </div>

        );

    }

}

export default App;
