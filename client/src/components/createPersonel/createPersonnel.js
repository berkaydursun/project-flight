import React,{useState} from "react";

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./createPersonnel.css";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


export const CreatePersonnel = () => {
 

  const[tc,setTc]=useState("");
  const[firstname,setFirstName]=useState("");
  const[lastname,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");




  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newStaff = {
      tc,
      firstname,
      lastname,
      email,
      password
    };
    axios.post('http://localhost:3000/api/v1/staff', newStaff)
    .then(response => alert('Staff added succesfully'))
    .catch(error => {
        console.error('There was an error!', error);
    });
}
  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
            <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
                <div>
                    <h1 className="text-center">Create Personel</h1>
                </div>
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
        </div>
      </div>
    </div>
  );
}
