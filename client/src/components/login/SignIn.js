import React, { Component } from 'react';

class SignIn extends Component {

    // Setting the component's initial state
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
    };

    handleInputChange = event => {
        // Get value and name of the input
        const { name, value } = event.target;
        // Update state with current input(s)
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        // Check if email is valid
        let isValidEmail = this.validate(this.state.email);
        if (!isValidEmail) {
            this.setState({emailError: 'Invalid email'})
        } else {
            this.setState({emailError: ""})
        }

        // Check if password is valid
        if (this.state.password.length < 8) {
            this.setState({passwordError: "Password must be at least 8 characters"})
        } else {
            this.setState({passwordError: ""})
        }
        
        // If both email and password are valid
        if (isValidEmail && this.state.password.length >= 8) {
            this.setState({
                email: "",
                password: ""
            })
        } 
    }

    // Validates an email
    validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    render() {
        return (
            <div className="form-container sign-in-container">
                <form className="form" action="#">
                    <h1 className="form-title">Welcome Back!</h1>

                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                        className="form-control"
                    />
                    {/** Display Email Error */}
                    {this.state.emailError ? (
                        <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.emailError}
                        </div>
                    ): null}
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                        className="form-control"
                    />
                    {/** Display Password Error */}
                    {this.state.passwordError ? (
                        <div style={{ color: "red", fontSize: 12 }}>
                            {this.state.passwordError}
                        </div>
                    ): null}
                    <button
                        className="form-button"
                        onClick={this.handleFormSubmit}
                    >sign in</button>
                    <a className="find-password" href="#">Forgot Password</a>
                </form>
            </div>
        );
    }
}

export default SignIn;
