import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/admin_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,      // Add email here
        password: password,   // Add password here
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data == "Login Successful") {

			navigate("/UserPage")
        } else if (data == "AI ACTIVATED") {
			
			navigate("/AI")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="div-big-contianer-for-form">
        <div className="div-css-title-form">
          <h1 className="css-title">Log in</h1>
        </div>
        <div className="div-container-form">
          <form onSubmit={handleSubmit}>
            <label className="css-details-name" htmlFor="email">Email:</label><br />
            <input 
              className="css-details-input" 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <br />
            <label className="css-details-name" htmlFor="password">Password:</label><br />
            <input 
              className="css-details-input" 
              type="password" 
              id="password" 
              name="password" 
              required 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <div className="css-div-button"> <br />
              <button 
                className="css-details-submit" 
                type="submit" 
                disabled={!email || !password}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
