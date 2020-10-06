import React, {Component} from 'react';
import './login.css';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Overlay from './Overlay.js';

class Login extends Component {
    state = {
            rightPanelActive: false
        }

    componentDidMount() {
        /* If user clicks Sign Up, let the page show the Sign Up component */

        let pathname = window.location.pathname;
        if (pathname === '/signup') {
            this.setState({ rightPanelActive: true })
        } 
        console.log(this.props)

        if (pathname === '/signup') {
            this.setState({ rightPanelActive: true })
            document.title = `Music eXchange | Sign up`;
        } else {
            document.title = `Music eXchange | Sign in`;
        }
    }

    handleClickSignUpButton = () => {
        this.setState({rightPanelActive: true})
        document.title = `Music eXchange | Sign up`;
    }

    handleClickSignInButton = () => {
        this.setState({rightPanelActive: false})
        document.title = `Music eXchange | Sign in`;
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
                    <SignUp {...this.props} />
                    <SignIn {...this.props}/>
                    <Overlay
                        handleClickSignInButton={handleClickSignInButton}
                        handleClickSignUpButton={handleClickSignUpButton}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Login;
