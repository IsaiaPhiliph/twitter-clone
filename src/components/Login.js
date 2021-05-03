import React, { useState } from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Oval } from "react-loading-icons";
import { motion } from "framer-motion";

function Login() {
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  // const setLoginOrRegister = () => {};
  // const loginOrRegister = "register";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    console.log("Setting loading state");
    setLoading(true);
    email &&
      password &&
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          console.log("User logged successfully");
          console.log("Setting loading state");
          setLoading(false);
          setError("");
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
            })
          );
        })
        .catch((err) => {
          setError(err.message);
          console.log("Setting loading state");
          setLoading(false);
        });
  };

  const register = (e) => {
    e.preventDefault();
    console.log("Setting loading state");

    setLoading(true);
    if (username && password && email) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          console.log("User created successfully");
          userAuth.user
            .updateProfile({
              displayName: username,
            })
            .then(() => {
              console.log("User account info updated correctly (username)");
              console.log("Setting error state");
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: userAuth.user.displayName,
                })
              );
            });
        })
        .catch((err) => {
          console.log("Setting error state");

          setError(err.message);
          console.log("Setting loading state");

          setLoading(false);
        });
    } else {
      console.log("Setting error state");

      setError("Rellena todos los campos!");
      console.log("Setting loading state");

      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form>
          <TwitterIcon />
          {error && <span className="login__error">{error}</span>}

          {loginOrRegister === "register" && (
            <input
              type="text"
              placeholder="Nombre de usuario"
              required
              value={username}
              onChange={(e) => {
                console.log("Setting username state");

                setUsername(e.target.value);
              }}
            />
          )}
          <input
            type="mail"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => {
              console.log("Setting email state");

              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => {
              console.log("Setting password state");

              setPassword(e.target.value);
            }}
          />
          {loginOrRegister === "login" ? (
            <button type="submit" onClick={loginToApp}>
              {loading ? <Oval /> : "Iniciar sesión"}
            </button>
          ) : (
            <button type="submit" onClick={register}>
              {loading ? <Oval /> : "Registrarse"}
            </button>
          )}
          <div className="login__toggle-type">
            {loginOrRegister === "login" ? (
              <div>
                <span>¿No tienes cuenta? </span>
                <span
                  className="login__hl-text"
                  onClick={() => {
                    console.log("llamando a setlogin");
                    setLoginOrRegister("register");
                  }}
                >
                  Registrate
                </span>
              </div>
            ) : (
              <div>
                <span>¿Ya tienes una cuenta? </span>
                <span
                  className="login__hl-text"
                  onClick={() => {
                    console.log("llamando a setlogin");
                    setLoginOrRegister("login");
                  }}
                >
                  Iniciar sesión
                </span>
              </div>
            )}
          </div>
        </form>
        <span></span>
      </div>
    </div>
  );
}

export default Login;
