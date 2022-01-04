import React from "react";
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

const StaffSidebar = () => {

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
            prefix={
              <i className="fa fa-bars fa-large"></i>
            }
          >
            <a href="/staff" className="text-decoration-none" style={{color:"inherit"}}>
              STAFF PANEL
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/staff"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="user-plus"
                >
                  Create Flight
                </CDBSidebarMenuItem>
              </NavLink>
             
              <NavLink
                exact
                to="/staff/listflight"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="list-alt"
                >
                  List Flight
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

export default StaffSidebar;
