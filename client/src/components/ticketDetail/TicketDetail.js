import React,{useEffect,useState} from "react";
import UserSidebar from "../userSidebar/userSideBar";
import Navbar from "../userNavbar/Navbar";
import QRCode from 'qrcode';
import { useLocation } from 'react-router-dom';

export const TicketDetail = () => {
  
    const location = useLocation();
    const [src, setSrc] = useState('');
    
    useEffect(() => {
        
  
     
      const yourText = "ID : "+location.state.myText._id+"\n"+"Flight Code : "+location.state.myText.code+"\n"+"From : "+location.state.myText.from+"\n"+"To : "+location.state.myText.to+"\n"+"Date : "+location.state.myText.date;
    
      QRCode.toDataURL(yourText).then((data) => {
        setSrc(data);
      });

     
    }, [])


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
                <h1 className="text-center">Ticket Detail</h1>
            </div>
            <div className="text-center">
            <ul className="list-group">
                <li className="list-group-item"><strong>Flight Code :</strong> {location.state.myText.code}</li>
                <li className="list-group-item"><strong>From :</strong> {location.state.myText.from}</li>
                <li className="list-group-item"><strong>To : </strong>{location.state.myText.to}</li>
                <li className="list-group-item"><strong>Date : </strong>{location.state.myText.date}</li>
                <li className="list-group-item"><img src={src} /></li>

            </ul>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
