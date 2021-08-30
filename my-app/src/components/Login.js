import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">ChowTime</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/dashboard">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/login">Sign Up</Link>
      </div>
    </>
  )
}







// import React from 'react';
// import fire from './config/fire';

// class Login extends React.Component {

//   signUp() {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     fire.auth().createUserWithEmailAndPassword(email, password)
//       .then((u) => {
//         console.log('Successfully Signed Up');
//       })
//       .catch((err) => {
//         console.log('Error: ' + err.toString());
//       })
//   }

//   login() {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     fire.auth().signInWithEmailAndPassword(email, password)
//       .then((u) => {
//         console.log('Successfully Logged In');
//       })
//       .catch((err) => {
//         console.log('Error: ' + err.toString());
//       })
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <div>
//           <div>Email</div>
//           <input id="email" placeholder="Enter Email.." type="text"/>
//         </div>
//         <div>
//           <div>Password</div>
//           <input id="password" placeholder="Enter Password.." type="text"/>
//         </div>
//         <button style={{margin: '10px'}} onClick={this.login}>Login</button>
//         <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
//       </div>
//     )
//   }
// }

// export default Login;