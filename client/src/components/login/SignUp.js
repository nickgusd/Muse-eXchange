import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="form" action="#">
                    <h1 className="form-title">Hello!</h1>

                    <input type="text" placeholder="First Name" className="form-control" />
                    <input type="text" placeholder="Last Name" className="form-control" />
                    <input type="email" placeholder="Email" className="form-control" />
                    <input type="password" placeholder="Password" className="form-control" />
                    <button className="form-button">SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
