import React,{ useContext } from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";
import { GlobalContext } from "../../context/GlobalContext";
import {Button} from "reactstrap";
import { useHistory } from "react-router-dom";


const Navbar = () => {
  const { cart } = useContext(GlobalContext);

  const history = useHistory();

  const goBack = () =>{
    history.push("/");

  }

	return (
        <Header style={{background:"#333", color:"#fff", paddingBottom: 18}}>
          <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <Button color="danger" className="ml-auto mt-3" onClick={goBack}>Log Out </Button>
          
          </CDBNavbar>
        </Header>
	);
}

export default Navbar;
