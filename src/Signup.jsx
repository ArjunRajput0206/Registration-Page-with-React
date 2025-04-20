import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault(); // 🔧 fixed this!

    if (!username || !email || !phone || !password || !confirmpassword) {
      if (!username) {
        toast.error("Username is required");
      } else if (!email) {
        toast.error("Email is required");
      } else if (!phone) {
        toast.error("Phone is required");
      } else if (!password) {
        toast.error("Password is required");
      } else if (!confirmpassword) {
        toast.error("Confirm password is required");
      }
    } else {
      if (password === confirmpassword) {
        toast.success("Signup Successful ");
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmpassword("");
      } else {
        toast.error("Password & Confirm Password do not match");
      }
    }
  }

  return (
    <div>
      <form className="signup-form" onSubmit={handlesubmit}>
        <h1>Register Now!</h1>

        <div className="element">
          <label htmlFor="username">Username :</label>
          <input
            type='text'
            name="username"
            id="username"
            onInput={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="element">
          <label htmlFor="email">Email :</label>
          <input
            type='email'
            name="email"
            id="email"
            onInput={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="element">
          <label htmlFor="phone">Phone No. :</label>
          <input
            type='tel'
            name="phone"
            id="phone"
            onInput={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div className="element">
          <label htmlFor="password">Password :</label>
          <input
            type='password'
            name="password"
            id="password"
            onInput={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="element">
          <label htmlFor="confirmpassword">Confirm Password :</label>
          <input
            type='password'
            name="confirmpassword"
            id="confirmpassword"
            onInput={(e) => setConfirmpassword(e.target.value)}
            value={confirmpassword}
          />
        </div>

        <div className="element">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}

export default Signup;
