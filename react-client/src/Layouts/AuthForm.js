import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.scss";

const AuthForm = (props) => {
  const isLogin = props.type === "login";
  const isRegister = props.type === "register";
  return (
    <form className={styles.form}>
      <div className={styles.form__item}>
        <label htmlFor="email" className={styles.form__label}>
          Email
        </label>
        <input type="email" name="email" className={styles.form__input} />
        <div className={styles.form__error}>sample error</div>
      </div>
      <div className={styles.form__item}>
        <label htmlFor="password" className={styles.form__label}>
          Password
        </label>
        <input type="password" name="password" className={styles.form__input} />
        <div className={styles.form__error}>sample error</div>
      </div>
      {isRegister && (
        <div className={styles.form__item}>
          <label htmlFor="password" className={styles.form__label}>
            Repeat Password
          </label>
          <input
            type="password"
            name="password"
            className={styles.form__input}
          />
          <div className={styles.form__error}>sample error</div>
        </div>
      )}
      <div className={styles.form__btn_div}>
        <button type="submit" className="btn-form">
          {isLogin && "Login"}
          {isRegister && "Sign Up"}
        </button>
      </div>
      <div className={styles.form__redirect}>
        <p>
          {isLogin && "Do not have an account ?"}
          {isRegister && "Already have an account ?"}
        </p>
        <Link
          className={styles.form__link}
          to={isLogin ? "/register" : isRegister ? "/login" : ""}
        >
          {isLogin && "Register"}
          {isRegister && "Login"}
        </Link>
      </div>
      {isLogin && (
        <div className={styles.form__forgot}>
          <p>Forgot password ?</p>
          <Link className={styles.form__link} to="/">
            Reset password
          </Link>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
