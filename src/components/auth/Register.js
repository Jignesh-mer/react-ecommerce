import React from 'react'

const Register = () => {
	return(
		<>
			<div id="logreg-forms">
                <form action="/signup/" className="form-signup">
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                    </div>
                    <div className="social-login">
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                    </div>
                    
                    <p style={{textAlign: "center"}}>OR</p>

                    <input type="text" id="user-name" className="form-control" placeholder="Full name" required="" autofocus="" />
                    <input type="email" id="user-email" className="form-control" placeholder="Email address" required autofocus="" />
                    <input type="password" id="user-pass" className="form-control" placeholder="Password" required autofocus="" />
                    <input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required autofocus="" />

                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                    <a href="#" id="cancel_signup"><i className="fas fa-angle-left"></i> Back</a>
                </form>
                <br />
            </div>
		</>
	)
}

export default Register