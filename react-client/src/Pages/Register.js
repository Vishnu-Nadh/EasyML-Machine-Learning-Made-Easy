import React from "react";
import registerimg from "../Assets/registerbg.gif";
import AuthForm from "../Layouts/AuthForm";

const Register = () => {
  return (
    <div className="auth-layout">
      <section className="form-section">
        <h2 className="heading-secondary">User Sign Up</h2>
        <AuthForm type="register" />
      </section>
      <section className="svg-section">
        <img src={registerimg} alt="register svg gif" />
      </section>
    </div>
  );
};

export default Register;
