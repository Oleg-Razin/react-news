import React,{useState} from 'react';

function LoginForm (){
	
	const corLogin = localStorage.getItem('user');
	const corPassword = localStorage.getItem('password');

	const [login, setLogin]=useState('');
	const [password, setPassword]=useState('');
	const [loginError, setLoginError]=useState(false);
	const [passwordError, setPasswordError]=useState(false);

	const loginHandler = (e)=>{
		setLogin(e.target.value);
	}

	const passwordHandler = (e)=>{
		setPassword(e.target.value);
	}

	const handleSubmit = (event)=> {
    if (login===corLogin && password===corPassword){
			setPasswordError(false);
			setLoginError(false);
			localStorage.setItem('auth', true);
		} else if(login===corLogin && password!==corPassword){
			setPasswordError(true);
		} else if(login!==corLogin && password===corPassword){
			setLoginError(true);
		} else{
			setPasswordError(true);
			setLoginError(true);
		}
    event.preventDefault();
  }

	return(
		<form onSubmit={handleSubmit} className="c-form-login u-bg-secondary-400">
			<div className="c-form-login__control">
				<input className="c-form-login__input" onChange={loginHandler} placeholder=" " id="user" type="text" value={login}/>
				<label className="c-form-login__label" htmlFor="user">User</label>
				{loginError ? <span className="c-form-login__error">User not found</span> : ''}
			</div>
			<div className="c-form-login__control">
				<input className="c-form-login__input" onChange={passwordHandler} placeholder=" " id="password" type="password" value={password}/>
				<label className="c-form-login__label"  htmlFor="password">Password</label>
				{passwordError ? <span className="c-form-login__error">Incorrect password</span> : ''}
			</div>
			<div className="c-form-login__control text-center">
				<button className="btn btn--primary"><i className="fas fa-sign-in-alt"></i>Log in</button>
			</div>
		</form>
	)
}

export default LoginForm