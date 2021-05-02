import React, { useState } from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

function Login() {
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    username &&
      email &&
      password &&
      auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        console.log("User created successfully");
        userAuth.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            console.log("User account info updated correctly (username)");
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              })
            );
          });
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <form>
          <TwitterIcon />
          {loginOrRegister === "register" && (
            <input
              type="text"
              placeholder="Nombre de usuario"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="mail"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginOrRegister === "login" ? (
            <button type="submit" onClick={loginToApp}>
              Iniciar sesión
            </button>
          ) : (
            <button type="submit" onClick={register}>
              Registrarse
            </button>
          )}
          <div className="login__toggle-type">
            {loginOrRegister === "login" ? (
              <div>
                <span>¿No tienes cuenta? </span>
                <span
                  className="login__hl-text"
                  onClick={() => setLoginOrRegister("register")}
                >
                  Registrate
                </span>
              </div>
            ) : (
              <div>
                <span>¿Ya tienes una cuenta? </span>
                <span
                  className="login__hl-text"
                  onClick={() => setLoginOrRegister("login")}
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
