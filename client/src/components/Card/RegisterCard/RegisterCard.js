import { Link } from "react-router-dom";
import "./RegisterCard.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const RegisterCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    // const tala = process.env.REACT_APP_BASE_URL;
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    // console.log(process.env.REACT_APP_BASE_URL);
    // const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email, age, gender }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("registration successful");
      setRedirect(true);
    } else if (response.status === 404) {
      alert("User already exists");
    } else {
      alert("Sorry, not able to register");
    }
  }
  if (redirect) {
    return <Navigate to={"/account/login"} />;
  }

  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>
        <form action="" onSubmit={register}>
          <div className="register__inputs">
            <div className="fname__input__container reg__input__container">
              <label className="fname__label input__label">Name</label>
              <input
                type="text"
                className="fname__input register__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="email__input__container reg__input__container">
              <label className="email__label input__label">Email</label>
              <input
                type="email"
                className="email__input register__input"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password__input__container reg__input__container">
              <label className="password__label input__label">Password</label>
              <input
                type="password"
                className="password__input register__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="password__input__container reg__input__container">
              <label className="password__label input__label">Age</label>
              <input
                type="number"
                className="password__input register__input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="password__input__container reg__input__container">
              <label className="password__label input__label">Gender</label>
              <input
                type="text"
                className="password__input register__input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="register__button__container">
              <button className="register__button">Create Account</button>
            </div>
          </div>
          <div className="register__other__actions">
            <div className="register__login__account">
              Already have account? <Link to="/account/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
