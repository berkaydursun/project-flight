import React,{useState,useEffect} from "react";
import StaffSidebar from "../staffSidebar/staffSidebar";
import Navbar from "../Navbar/Navbar";
import axios from "axios"
import {Table,Button} from "reactstrap"
export const ListFlight = () => {

  const[flights,setFlights]=useState([]);


  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3000/api/v1/flight')
        .then(response => setFlights(response.data));
	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

	const deleteFlight=(id)=>{
		axios.delete('http://localhost:3000/api/v1/flight/'+id)
        .then(() => alert("silindi"));
		setFlights(flights.filter(f => f._id !== id))
		
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
                <h1 className="List Flight">List Flight</h1>
            </div>

            
						<Table dark>
							<thead>

							<th>Flight Code</th>
							<th>From</th>
							<th>To</th>
							<th>Time</th>
							<th>Date</th>
							<th>Price</th>

						</thead>
						<tbody>
						{flights.map((f, i) => {     
						console.log("Entered");                 
						// Return the element. Also pass key     
						return (
							<tr key={i}>
							<td>{f.code}</td>
							<td>{f.from}</td>
							<td>{f.to}</td>
							<td>{f.time}</td>
							<td>{f.date}</td>
							<td>{f.price}</td>


							<td><Button outline color="info" onClick={()=>deleteFlight(f._id)}>Delete</Button></td>

						</tr>
						) 
					})}
						
						</tbody>

					</Table>
          </div>
        </div>
      </div>
    </div>
  );
};
