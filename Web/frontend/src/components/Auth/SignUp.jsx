import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import axios from 'axios';
import { Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function SignUp() {
    const [name, setName] = useState("");
    const [employerId, setemployerId] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole] = useState("Admin")
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    
    const data = { name, employerId,  role,password };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        data
      );

      if (response.status === 200) {
        toast.success("Registration successful!");
        navigate("/home"); 
        const accessToken = response.data.accessToken;
        localStorage.setItem('at',accessToken);
        const role = response.data.createdUser.role;
        localStorage.setItem('role', role);
        
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Stack gap={2}>
      <input
        className="login-input"
        placeholder="Enter your Name"
        required
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="login-input"
        placeholder="Add your employerId"
        required
        type="employerId"
        value={employerId}
        onChange={(e) => {
          setemployerId(e.target.value);
        }}
      />
      <Form.Select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="Admin">Admin</option>
        <option value="superAdmin">SuperAdmin</option>
        {console.log(typeof(role))}
      </Form.Select>
      <input
        className="login-input"
        placeholder="Enter Your Password"
        required
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <div className="button">
        <button className="login-button" onClick={handleClick}>
          {loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ marginRight: 20, color: "#4d7298" }}
            />
          )}
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      </div>
    </Stack>
  )
}

export default SignUp