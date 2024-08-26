import React,{useState} from 'react'
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignUp from '../../components/Auth/SignUp';
import SignIn from '../../components/Auth/SignIn';
import './Auth.css'

function Auth() {
    const [key, setKey] = useState("SignIn");
  return (
    <section className="Login-sec">
        <div className="login-form">
            <h1>Welcome</h1>
        <p>Create your account!!</p>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab className='letters' eventKey="SignIn" title="Sign In">
            <SignIn />
          </Tab>
          <Tab eventKey="signup" title="Sign Up">
            <SignUp />
          </Tab>
        </Tabs>
        </div>
    </section>
  )
}

export default Auth