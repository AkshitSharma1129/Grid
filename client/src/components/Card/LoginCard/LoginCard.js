import { Link , Navigate} from 'react-router-dom';
import './LoginCard.css';
import {useContext, useState} from "react";
import {UserContext} from "./UserContext";

const LoginCard = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:6000/login', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
              setUserInfo(userInfo);
              setRedirect(true);
            });
          } else {
            alert('wrong credentials');
          }}
          if (redirect) {
            return <Navigate to={'/'} />
          }
    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <form action="" onSubmit={login}>
                <div className="login__inputs">
                    
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input login__input" placeholder='example@gmail.com' value={email}
                    onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input" placeholder='**********' value={password}
                    onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" type='text' >LOGIN</button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have account? <Link to="/account/register">Create account</Link> </div>
                </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginCard;