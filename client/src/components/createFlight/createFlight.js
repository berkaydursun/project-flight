import React,{useState} from "react";
import StaffSidebar from "../staffSidebar/staffSidebar";
import Navbar from "../Navbar/Navbar";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";



export const CreateFlight = () => {

  const[code,setCode]=useState("");
  const[from,setFrom]=useState("");
  const[to,setTo]=useState("");
  const[time,setTime]=useState("");
  const[date,setDate]=useState();
  const[price,setPrice]=useState();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFlight = {
      code,
      from,
      to,
      time,
      date,
      price
    };
    axios.post('http://localhost:3000/api/v1/flight', newFlight)
    .then(response => alert('Flight added succesfully'))
    .catch(error => {
        console.error('There was an error!', error);
    });
  }

  return (
    <div className="d-flex">
      <div>
        <StaffSidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div>
                <h1 className="text-center">Create Flight</h1>
            </div>
            <Form onSubmit={handleSubmit} dark>
        <FormGroup>
          <Label for="code">Code</Label>
          <Input type="text" name="code" id="code" placeholder="Enter Flight Code" value={code}
                  onChange={e => setCode(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="from">From</Label>
          <Input type="text" name="from" id="from"  placeholder="From"  value={from}
                  onChange={e => setFrom(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="to">To</Label>
          <Input type="text" name="to" id="to" placeholder="To"  value={to}
                  onChange={e => setTo(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="time">Time</Label>
          <Input type="text" name="time" id="time" placeholder="Enter Time" value={time}
                  onChange={e => setTime(e.target.value)} />
        </FormGroup>
        
        <FormGroup>
          <Label for="date">Date</Label>
          <Input type="date" name="date" id="date" placeholder="Pick a Date" value={date}
                  onChange={e => setDate(e.target.value)} />
        </FormGroup>
        
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="number" name="price" id="price" placeholder="Enter Ticket Price" value={price}
                  onChange={e => setPrice(e.target.value)} />
        </FormGroup>
        <Button type="submit">Submit</Button>
          </Form>

          </div>
        </div>
      </div>
    </div>
  );
};
