import React,{useState} from 'react'
import "./login.css";
import {Form,FormGroup,Button,Label,Input} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AdminLogin() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loginInfo = {
          username,
          password,
        };
        axios.post('http://localhost:3000/api/v1/adminLogin', loginInfo)
        .then(response => {
            history.push("/admin")
        
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
      }


    return (
        <div className="compDiv">
        <h2>Admin Sign In</h2>

        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              
            />
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>
          <a href="/" className='btn btn-outline-danger font-weight-bold mt-2'>Go Back</a>

      </Form>
      
    </div>
    )
}

export default AdminLogin
