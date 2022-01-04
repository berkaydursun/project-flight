import React,{useContext} from "react";
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

import "./userSidebar.css";
const UserSidebar = () => {

  return (
      <div
        className={`app`}
        style={{ display: "flex", height: "100%", overflow:"scroll initial"}}
      >
        <CDBSidebar
          textColor="#fff"
          backgroundColor="#333"
          
        >
          <CDBSidebarHeader
            className="flex"
            prefix={
              <i className="fa fa-bars fa-large"></i>
            }
          >
            <a href="/user" className="text-decoration-none" style={{color:"inherit"}}>
              USER PANEL
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/user"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="plane"
                >
                  View Flight
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/user/viewticket"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="ticket-alt"
                >
                  View Ticket
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
            <CDBSidebarMenu>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 5px"
              }}
            >
              APRON Fly
            </div>
          </CDBSidebarFooter>

        </CDBSidebar>

      </div>
  );
}

export default UserSidebar;
