import React,{useEffect,useState} from "react";
import UserSidebar from "../userSidebar/userSideBar";
import Navbar from "../userNavbar/Navbar";
import axios from "axios";
import {Table,Button} from "reactstrap";
import { TicketDetail } from "../ticketDetail/TicketDetail";
import {  useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const ViewTicket = () => {

	const [myFlights, setMyFlights] = useState([])
	const [src, setSrc] = useState('');
	const userID =  JSON.parse(localStorage.getItem("id"));

	const history = useHistory();
	useEffect(() => {
		// GET request using axios inside useEffect React hook
		axios.get('http://localhost:3000/api/v1/user/'+userID)
			.then(response => setMyFlights(response.data.flights));
		// empty dependency array means this effect will only run once (like componentDidMount in classes)
		}, []);

	const goTicketDetail = (gelenId) =>{
		history.push({
			pathname: '/ticketdetail',
			state: {
			  myText: myFlights[gelenId], 
			},
		  }); 
	}



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
                <h1 className="text-center">View Ticket</h1>
            </div>
            
						<Table dark>
							<thead>

							<th>Flight Code</th>
							<th>From</th>
							<th>To</th>
							<th>Time</th>
							<th>Date</th>
							<th>Price</th>
							<th>Detail</th>
						</thead>
						<tbody>
						{myFlights.map((f, i) => {
						
						return (
							<tr key={i}>
							<td>{f.code}</td>
							<td>{f.from}</td>
							<td>{f.to}</td>
							<td>{f.time}</td>
							<td>{f.date}</td>
							<td>{f.price}</td>
							<td><Button color="btn btn-outline-warning" onClick={()=>goTicketDetail(i)}>Detail</Button></td>

							



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
