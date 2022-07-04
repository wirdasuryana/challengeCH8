import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLvl] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/players", {
        username,
        email,
        password,
        experience,
        lvl,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>          
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Experience</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Level</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lvl}
                onChange={(e) => setLvl(e.target.value)}
                placeholder="Level"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
