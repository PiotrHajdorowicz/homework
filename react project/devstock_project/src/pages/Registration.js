import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
  width: 30vh;
  background-color: grey;
  color: white;
  border 3px solid black;
  text-align:center;
  align-items:center;
`;

function Registration() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    const data = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post("https://localhost:3000/users", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  return (
    <Container>
      <h2>Registration</h2>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isError && <p>Coś poszło nie tak. Spróbuj ponownie.</p>}
        <button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
        {data}
      </div>
    </Container>
  );
}
export default Registration;
