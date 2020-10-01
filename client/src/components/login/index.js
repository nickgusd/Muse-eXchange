import React, { Component } from 'react';
import './login.css';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Overlay from './Overlay.js';

// interface State {
//     rightPanelActive: boolean,
// }

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         rightPanelActive: false,
    //     }
    // }

    state = {
        rightPanelActive: false
    }

    componentDidMount() {
        /* If user clicks Sign Up, let the page show the Sign Up component */
        let pathname = this.props.location.pathname;
        if (pathname === '/signup') {
            this.setState({ rightPanelActive: true })
        } 
    }
    
    handleClickSignUpButton = () => this.setState({
        rightPanelActive: true,
    });

    handleClickSignInButton = () => this.setState({
        rightPanelActive: false,
    });

    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this;
        const { rightPanelActive } = this.state;
        return (
            <div className="App">
                <div
                    className={`container ${rightPanelActive ? `right-panel-active` : ``}`}
                    id="container"
                >
                    <SignUp />
                    <SignIn />
                    <Overlay
                        handleClickSignInButton={handleClickSignInButton}
                        handleClickSignUpButton={handleClickSignUpButton}
                    />

                </div>
            </div>
        );
    }
}

export default App;
