import React from "react";
import Navbar from "./Navbar";

const LoginForm = () => {
    return (
        <>-
        <div className="login">
            <Navbar/>
            <div className="signup">
                <div className="login-form">
                    <div className="form-box solid">
                        <form>
                            <h1 className="login-text">Sign Up</h1>
                            <div className="input-div">
                            <div className="fname">
                                <label>First Name</label><br></br>
                                <input
                                    type="text"
                                    name="fname"
                                    className="1ogin-box"
                                /><br></br>
                            </div>
                            <label>Last Name</label><br></br>
                            <input
                                type="text"
                                name="lname"
                                className="1ogin-box"
                            /><br></br>
                            <label>Username</label><br></br>
                            <input
                                type="text"
                                name="username"
                                className="1ogin-box"
                            /><br></br>
                            <label>Password</label><br></br>
                            <input
                                type="password"
                                name="password"
                                className="1ogin-box"
                            /><br></br>
                            <input type="submit" value="LOGIN" className="login-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default LoginForm;
