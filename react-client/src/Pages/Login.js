import React from "react";
import loginimg from "../Assets/loginbg.gif";
import AuthForm from "../Layouts/AuthForm";

const Login = () => {
  return (
    <div className="auth-layout">
      <section className="form-section">
        <h2 className="heading-secondary">User Login</h2>
        <AuthForm type="login" />
      </section>
      <section className="svg-section">
        <img src={loginimg} alt="login svg gif" />
      </section>
    </div>
  );
};

export default Login;
