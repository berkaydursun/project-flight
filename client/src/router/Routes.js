import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ListUser } from "../components/listUser/listUser";
import { ListPersonnel } from "../components/listPersonel/listPersonnel";
import { CreatePersonnel } from "../components/createPersonel/createPersonnel";

import { CreateFlight } from "../components/createFlight/createFlight";
import { ListFlight } from "../components/listFlight/listFlight";

import { ViewFlight } from "../components/viewFlight/viewFlight";
import { ViewTicket } from "../components/viewTicket/viewTicket";

import  Login  from "../components/login/Login";
import  Register  from "../components/registerUser/Register";
import StaffLogin from "../components/staffLogin/StaffLogin";
import AdminLogin from "../components/adminLogin/AdminLogin";
import { TicketDetail } from "../components/ticketDetail/TicketDetail";





const Routes = () => {
  const userID =  JSON.parse(localStorage.getItem("id"));
  return (
    <Fragment>
      <BrowserRouter>

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/staffLogin" component={StaffLogin} />
        <Route exact path="/adminLogin" component={AdminLogin} />



        
        <Route exact path="/admin" component={CreatePersonnel} />
        <Route path="/admin/listpersonnel" component={ListPersonnel} />
        <Route path="/admin/listuser" component={ListUser} />

        <Route exact path="/staff" component={CreateFlight} />
        <Route path="/staff/listflight" component={ListFlight} />

        
          <Route exact path="/user" component={ViewFlight} />
          <Route path="/user/viewticket" component={ViewTicket} />
          <Route path="/ticketdetail" component={TicketDetail} />

        
        

      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
