import React,{useState} from 'react'
import "../login/login.css";
import {Form,FormGroup,Button,Label,Input} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {

    const[tc,setTc]=useState("");
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  
    const history = useHistory();
  
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      const newUser = {
        tc,
        firstname,
        lastname,
        email,
        password
      };

     
      axios.post('http://localhost:3000/api/v1/user', newUser)
      .then(response => {
          localStorage.setItem("id", JSON.stringify(response.status));
          history.push("/")
      
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
    }
    return (
        <div className="compDiv">
        <h2>Register</h2>

        <Form onSubmit={handleSubmit} dark>
        <FormGroup>
          <Label for="tcnumber">Tc Number</Label>
          <Input type="text" name="text" id="tcnumber" placeholder="Enter TC Number" value={tc}
                  onChange={e => setTc(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input type="text" name="firstname" id="firstname"  placeholder="Enter First Name"  value={firstname}
                  onChange={e => setFirstName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input type="text" name="lastname" id="lastname" placeholder="Enter Last Name"  value={lastname}
                  onChange={e => setLastName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="email">E - Mail</Label>
          <Input type="email" name="email" id="email" placeholder="Enter E - Mail" value={email}
                  onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter Password" value={password}
                  onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <Button type="submit">Submit</Button>
          </Form> 
          </div>

    )
}

export default Register
