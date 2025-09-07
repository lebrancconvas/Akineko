import React, { useState } from "react";
import RegisterStyle from "../styles/pages/Register.module.css";
import type { IUserRegister } from "../@types/user.interface";

function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registerData: IUserRegister = {
      username,
      password,
      display_name: displayName === "" ? username : displayName
    };

    console.log(registerData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={RegisterStyle.form}>
        <div>
          <label>Username</label>
          <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value.trim())} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value.trim())} />
        </div>

        <div>
          <label>Display Name</label>
          <input type="text" name="display" id="display" onChange={(e) => setDisplayName(e.target.value.trim())} />
        </div>

        <input type="submit" value="submit" className={RegisterStyle.submit} />
      </form>
    </div>
  )
};

export default Register;