import React,{useState,useEffect,useContext} from "react";
import UserSidebar from "../userSidebar/userSideBar";
import Navbar from "../userNavbar/Navbar";
import axios from "axios"
import {Table,Button} from "reactstrap"
import {GlobalContext} from "../../context/GlobalContext";
export const ViewFlight = () => {

  const[flights,setFlights]=useState([]);
  const {addCart} =useContext(GlobalContext);

  const userID =  JSON.parse(localStorage.getItem("id"));

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3000/api/v1/flight')
        .then(response => setFlights(response.data));
	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);



  return (
    <div className="d-flex">
      <div>
        <UserSidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
      
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div>
                <h1 className="text-center">Our Flights</h1>
            </div>
            <Table dark>
							<thead>

							<th>Flight Code</th>
							<th>From</th>
							<th>To</th>
							<th>Time</th>
							<th>Date</th>
							<th>Price</th>
							<th>Buy</th>



						
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


							<td><Button outline color="info" onClick={(e)=>(addCart(f))}>Buy</Button></td>

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
