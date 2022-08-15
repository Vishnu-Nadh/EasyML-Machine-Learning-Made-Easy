import React from "react";
import loginimg from "../Assets/loginbg.gif";
import AuthForm from "../Layouts/AuthForm";

const Login = () => {
  return (
    <div className="auth-layout">
      <section className="form-section">
        <h2 className="heading-secondary">Login</h2>
        <AuthForm />
      </section>
      <section className="svg-section">
        <img src={loginimg}></img>
      </section>
    </div>
  );
};

export default Login;
