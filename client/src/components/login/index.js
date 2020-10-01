import React, {Component} from 'react';
import './login.css';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Overlay from './Overlay.js';

// interface State {
//     rightPanelActive: boolean,
// }

class App extends Component {
    constructor() {

        super();
        this.state = {
            rightPanelActive: false,
        }
    }

    handleClickSignUpButton = () => this.setState({
        rightPanelActive: true,
    });

    handleClickSignInButton = () => {
        this.setState({
        rightPanelActive: false,
    })
};

    handleSubmit = () => {
        this.props.setUser({
            username: "Wilson",
            password: "123456"
        })
    }
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
                    <SignIn handleSubmit={this.handleSubmit}/>
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
