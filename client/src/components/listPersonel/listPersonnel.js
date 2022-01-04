import React,{useEffect,useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./listPersonnel.css"
import axios from "axios"
import {Table,Button} from "reactstrap"

export const ListPersonnel = () => {
 // tc: req.body.tc,
  // firstname: req.body.firstname,
  // lastname: req.body.lastname,
  // email:req.body.email,
  // password: req.body.password
   

  const[personel,setPersonel]=useState([]);


  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3000/api/v1/staff')
        .then(response => setPersonel(response.data));
	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

	const deletePersonel=(id)=>{
		axios.delete('http://localhost:3000/api/v1/staff/'+id)
        .then(() => alert("silindi"));
		setPersonel(personel.filter(p => p._id !== id))
		
	}

	return (
		<div className="d-flex profile">
			<div>
      			<Sidebar/>
			</div>
      		<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
      			<Navbar/>
      			<div style={{height:"100%"}}>
					<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
                        <div>
                            <h1 className="text-center">List Staff</h1>
                        </div>

						<Table dark>
							<thead>

							<th>TC</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>E-Mail</th>
							<th>Sil</th>

						
						</thead>
						<tbody>
						{personel.map((p, i) => {     
						console.log("Entered");                 
						// Return the element. Also pass key     
						return (
							<tr key={i}>
							<td>{p.tc}</td>
							<td>{p.firstname}</td>
							<td>{p.lastname}</td>
							<td>{p.email}</td>
							<td><Button outline color="info" onClick={()=>deletePersonel(p._id)}>Delete</Button></td>

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
}