import React,{useState} from 'react'
import "./login.css";
import {Form,FormGroup,Button,Label,Input} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
function StaffLogin() {

    const [tc,setTc] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const loginInfo = {
          tc,
          password,
        };
        axios.post('http://localhost:3000/api/v1/stafflogin', loginInfo)
        .then(response => {
            localStorage.setItem("id", JSON.stringify(response.data));
            history.push("/staff")
        
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
      }


    return (
        <div className="compDiv">
        <h2>Staff Sign In</h2>
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
          <Button type="submit" color="primary">Submit</Button>
          <a href="/" className='btn btn-outline-danger font-weight-bold mt-2'>Go Back</a>

      </Form>
      
    </div>
    )
}

export default StaffLogin
