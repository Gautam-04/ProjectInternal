import React,{useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from "react-bootstrap";

function SignIn() {
 const [employerId, setemployerId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
async function handleClick(e) {
  e.preventDefault();
  setLoading(true);

  await axios
    .post("http://localhost:8000/api/v1/users/login", {
      employerId,
      password,
    })
    .then((result) => {
      console.log(result);
      if (result.status === 200) {
        toast.success("Registration successful!");
        navigate("/home"); 
        const accessToken = result.data.accessToken;
        localStorage.setItem('at',accessToken);
        const role = result.data.loggedInUser.role;
        localStorage.setItem('role', role);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    })
    .catch((err) => {
      console.error(err);
      toast.error("Try again after sometime");
    }).finally(()=>{setLoading(false)})
}


  return (
    <Stack gap={2}>
      <input
        className="login-input"
        placeholder="Add your employerId"
        type="text"
        value={employerId}
        onChange={(e) => {
          setemployerId(e.target.value);
        }}
      />
      <input
        className="login-input"
        placeholder="Enter Your Password"
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
          {loading ? "Loading..." : "Sign In"}
        </button>
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      </div>
    </Stack>
  )
}

export default SignIn