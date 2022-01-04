import React from "react";
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

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
            <a href="/admin" className="text-decoration-none" style={{color:"inherit"}}>
              ADMIN PANEL
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/admin"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="user-plus"
                >
                  Create Personnel
                </CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink
                exact
                to="/admin/listpersonnel"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="list-alt"
                >
                  List Staff
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/admin/listuser"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem
                  icon="list-alt"
                >
                  List User
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

export default Sidebar;
