import React,{useState} from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //access the setUser method 
    const {setUser}=useContext(UserContext)

      //password verification function
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    };
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />{" "}
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
}

export default login