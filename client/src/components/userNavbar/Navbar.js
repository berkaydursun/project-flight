import React,{ useContext,useState } from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";
import { GlobalContext } from "../../context/GlobalContext";
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Table} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Navbar = () => {

  const history = useHistory();

  const { cart,setCart ,balance,setBalance,sum,buy} = useContext(GlobalContext);
  const userID =  JSON.parse(localStorage.getItem("id"));
  const refreshCart = () =>{
    setCart([])
  } 

  const logout=()=>{
    localStorage.clear();
    history.push("/")

  }

  const buyCart = () =>{
    buy();
    console.log(cart.length);
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      axios.post('http://localhost:3000/api/v1/user/flight/'+userID, element)
        .then(response => console.log(response.data))
        .catch(error => {
            console.error('There was an error!', error);
        });

    }

  }

  const [modal,setModal]=useState(false);
  function toggle() {
   setModal(!modal)
  }
	return (
        <Header style={{background:"#333", color:"#fff", paddingTop: 20,paddingBottom:20}}>
          <CDBNavbar dark expand="md" scrolling className="justify-content-start">
          <h3 className="ml-auto ">Balance : {balance}</h3>
          <div className="ml-auto mr-4">
          
        <Button color="info" onClick={toggle}><i class="fas fa-shopping-cart"></i> Cart | {cart.length}</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>My Cart</ModalHeader>
          <ModalBody>
          <Table dark>
							<thead>

							<th>From</th>
							<th>To</th>
							<th>Time</th>
							<th>Date</th>
							<th>Price</th>

						</thead>
						<tbody>
            {cart.map((f, i) => {     
						// Return the element. Also pass key     
						return (
							<tr key={i}>
							<td>{f.from}</td>
							<td>{f.to}</td>
							<td>{f.time}</td>
							<td>{f.date}</td>
							<td>{f.price}</td>
						</tr>
						) 
					})}
            </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={BuyAll}>Do Something</Button>{' '} */}
            <h4>Total : {sum}$</h4>
            <Button color="primary" onClick={buyCart}>Buy</Button>
            <Button color="secondary" onClick={refreshCart}>Clear</Button>
          </ModalFooter>
        </Modal>
          </div>
          <Button color="danger" onClick={logout}>Log Out</Button>
          </CDBNavbar>
        </Header>
	);
}

export default Navbar;
