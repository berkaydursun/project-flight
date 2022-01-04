import React,{useEffect,useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import {Table,Button} from "reactstrap"

export const ListUser = () => {


  const[user,setUser]=useState([]);


  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:3000/api/v1/user')
        .then(response => setUser(response.data));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

  const deleteUser = (id) =>{
    axios.delete('http://localhost:3000/api/v1/user/'+id)
        .then(() => alert("silindi"));
		setUser(user.filter(p => p._id !== id))
  }

  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div>
                <h1 className="text-center">List Users</h1>
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
						{user.map((p, i) => {     
						console.log("Entered");                 
						// Return the element. Also pass key     
						return (
							<tr key={i}>
							<td>{p.tc}</td>
							<td>{p.firstname}</td>
							<td>{p.lastname}</td>
							<td>{p.email}</td>
							<td><Button color="info" onClick={()=>deleteUser(p._id)}>Sil</Button></td>

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
