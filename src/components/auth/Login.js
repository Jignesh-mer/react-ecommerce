import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
	const [login, setlogin] = useState({username:'', password:''});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setlogin({
			...login, [name]:value
		})
	}
	const {username, password} = login;

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios.get(`http://local.jobbackend.com/api/v1/authme?email=${username}&password=${password}`, {headers: {'domain': 'localhost'}}
        )
		.then((response) => {
		    // dispatch({type: FOUND_USER, data: response.data[0]})
		    console.log(response.data)
		})
		.catch((error) => {
		    // dispatch({type: ERROR_FINDING_USER})
		    console.log(error)
		})
	}

	return(
		<>
			<div id="logreg-forms">
		        <form className="form-signin" onSubmit={handleSubmit}>
		            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: "center"}}> Sign in</h1>
		            <div className="social-login">
		                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
		                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
		            </div>
		            <p style={{textAlign: "center"}}> OR  </p>
		            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="username" value={username} onChange={handleChange}/>
		            <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" value={password} onChange={handleChange}/>
		            
		            <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
		            <a href="#" id="forgot_pswd">Forgot password?</a>
		            <hr></hr>
		            <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i> Sign up New Account</button>
		            </form>

		            <form action="/reset/password/" className="form-reset d-none">
		                <input type="email" id="resetEmail" className="form-control" placeholder="Email address" />
		                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
		                <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
	            	</form>
	            <br />
   			</div>
		</>
	)
}

export default Login