import './index.css';
import './util.css'
import fire from './fire.js';
import React, {useState, useEffect } from 'react';

function App() {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState(false);

	const login = () => {
		 fire
		 .auth()
		 .signInWithEmailAndPassword(email, password)
		 .catch(err => {
			switch(err.code) {
			case "auth/InvaildEmail":
			case "auth/user-disabled":
			case "auth/user-not-found":
				setEmailError(err.message);
				break;

	        case "auth/wrong-password":
				setPasswordError(err.message);
				break;
			}


		 })
		};

		//  const signUp = () => {
		// 	fire
		// 	.auth()
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.catch(err => {
		// 	   switch(err.code) {
		// 	   case "auth/email-already-in-use":
		// 	   case "auth/Invaild-email":
		// 	   case "auth/wrong-password":
		// 		   setPasswordError(err.message);
		// 		   break;
		// 	   }

		// 	})
		//  };

		//  const signOut = () => {
		// 	 fire.auth()
		//  }


	

	  return (

		<div className="App">
			
		</div>
    // <body>
    //   <div className="limiter">
    //     <div className="container-login100">
    //       <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
    //         <form className="login100-form validate-form flex-sb flex-w">
    //         <span className="login100-form-title p-b-32">
	// 					Account Login
	// 				</span>

	// 				<span className="txt1 p-b-11">
	// 					Username
	// 				</span>

    //       <div className="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
	// 					<input className="input100" type="text" name="username" ></input>
	// 					<span className="focus-input100"></span>
	// 				</div>

    //       <span className="txt1 p-b-11">
	// 					Password
	// 				</span>
	// 				<div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
	// 					<span className="btn-show-pass">
	// 						<i className="fa fa-eye"></i>
	// 					</span>
	// 					<input className="input100" type="password" name="pass" ></input>
	// 					<span className="focus-input100"></span>
	// 				</div>


    //       <div className="flex-sb-m w-full p-b-48">
	// 					<div className="contact100-form-checkbox">
	// 						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
	// 						<label className="label-checkbox100" for="ckb1">
	// 							Remember me
	// 						</label>
	// 					</div>
    //         <div>
	// 						<a href="index.html" class="txt3">
	// 							Forgot Password?
	// 						</a>
	// 					</div>
	// 				</div>

    //       <div className="container-login100-form-btn">
	// 					<button className="login100-form-btn">
	// 						Login
	// 					</button>
	// 				</div>




    //         </form>
    //       </div>

    //     </div>
    //   </div>
    // </body>
  );
}

export default App;
