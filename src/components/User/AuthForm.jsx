import React, { useContext, useRef, useState } from "react";
import Input from "../UI/Input";
import style from "./SignUp.module.css";
import Joi from "joi";
import { AuthContext } from "./../../state/AuthLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const switchSubmitHandler = () => {
    setIsLogin((pre) => !pre);
  };
  const validateForm = (enteredEmail, enteredPassword) => {
    const schema = Joi.object({
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{7,30}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    return schema.validate(
      {
        password: enteredPassword,
        email: enteredEmail,
      },
      { abortEarly: false }
    );
  };

  const getSignupData = async (e) => {
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGgedaXMpFIPlLB2RbSSEGp3_lknnzOtg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGgedaXMpFIPlLB2RbSSEGp3_lknnzOtg";
    }
    e.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    const validation = validateForm(enteredEmail, enteredPassword);
    if (validation.error) {
      setErrorList(validation.error.details);
    } else {
      setErrorList([]);
      const userData = JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      });
      const headers = { "Content-Type": "application/json" };
      axios
        .post(url, userData, { headers })
        .then((response) => {
              const {data} = response;
              console.log(data)
              if(data){
                setError('');
                authCtx.login(data.idToken);
                navigate('/Music');
              }else{
                setError("Authentication Failed!");
              }
        })
          .catch((error) => {
            console.log(error)
            setError("Authentication Failed!");
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <div
      className={
        " text-center d-flex flex-column justify-content-center  " + style.he
      }
    >
      <form className="w-50 p-4 m-auto " onSubmit={getSignupData}>
        <h2 className="text-center mb-2">{isLogin ? "Login" : "Signup"}</h2>
        {errorList.map((error, i) =>
          error.context.label === "password" ? (
            <div key={i} className="alert alert-danger p-2 m-2">
              Password cannot be less than 7 characters
            </div>
          ) : (
            <div key={i} className="alert alert-danger p-2 m-2">
              {error.message}
            </div>
          )
        )}
        <Input
          key={1}
          label="Email : "
          id="email-signup"
          type="email"
          ref={inputEmailRef}
        />
        <Input
          key={2}
          label="Password :"
          id="password-signup"
          type="password"
          ref={inputPasswordRef}
        />
        <button className="btn btn-outline-info px-3 mt-2">
          {isLogin ? "Login" : "Signup"}
        </button>
        <br /> <br />
        {error && (
          <div className="alert alert-danger p-2 bg-danger" role="alert">
            {error}
          </div>
        )}
        <button
          type="button"
          className="btn btn-outline-info px-4 mt-2"
          onClick={switchSubmitHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
}
