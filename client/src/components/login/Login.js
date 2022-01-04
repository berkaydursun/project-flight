import React,{useState} from 'react'
import "./login.css";
import {Form,FormGroup,Button,Label,Input} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Login() {

    const [tc,setTc] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    const goRegister = () =>{
        history.push("/register");
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loginInfo = {
          tc,
          password,
        };
        axios.post('http://localhost:3000/api/v1/login', loginInfo)
        .then(response => {
            localStorage.setItem("id", JSON.stringify(response.data));
            history.push("/user")
        
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
      }


    return (
        <div className="compDiv">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="tc">TC Number</Label>
            <Input
              type="text"
              name="tc"
              id="tc"
              placeholder="Enter Tc Number"
              value={tc}
              onChange={e => setTc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              
            />
          </FormGroup>
          <Button type="submit" color="primary">Log In</Button>
          <Button type="submit" color="dark" className="mt-2" onClick={goRegister}>Register</Button>
          <a href="/staffLogin" className='btn btn-outline-success mt-2 font-weight-bold'>Staff Login</a>
          <a href="/adminLogin" className='btn btn-outline-secondary font-weight-bold mt-2'>Admin Login</a>

      </Form>
      
    </div>
    )
}

export default Login
