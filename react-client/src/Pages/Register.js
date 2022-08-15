import React from "react";
import registerimg from "../Assets/registerbg.gif";

const Register = () => {
  return (
    <div className="auth-layout">
      <section className="form-section">{/* authform here */}</section>
      <section className="svg-section">
        <img src={registerimg} />
      </section>
    </div>
  );
};

export default Register;
