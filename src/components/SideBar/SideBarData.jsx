import React from "react";
import users_list from "../../assets/images/accounts.png";
import client_management_icon from "../../assets/images/client-management-icon.png";
import reviews_and_approvals_icon from "../../assets/images/reviews-and-approvals-icon.png";
import dashboard_icon from "../../assets/images/dashboard-icon.png";
import users_management from "../../assets/images/role-management.png";
import staff_logs from "../../assets/images/staff_logs.png";
import tickets_history from "../../assets/images/ticket-history.png";
import branches from "../../assets/images/location.png";
import log_out from "../../assets/images/log-out.png";
import generate_ticket from "../../assets/images/print-ticket.png";
import upload_resources from "../../assets/images/content.png";
import ticketing from "../../assets/images/ticketing.png";
import "./SideBar.css";
import { FiChevronDown } from 'react-icons/fi'; // Importing the Chevron Down icon


export const AdminSidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: (
      <img
        className="navIcon"
        src={dashboard_icon}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Reviews and Approvals",
    path: "/reviews-and-approvals",
    icon: (
      <img
        className="navIcon"
        src={reviews_and_approvals_icon}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Client Management",
    path: "/client-list",
    icon: (
      <img
        className="navIcon"
        src={client_management_icon}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/userlist",
    icon: (
      <img
        className="navIcon"
        src={users_list}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Roles Management",
    path: "/user-management",
    icon: (
      <img
        className="navIcon"
        src={users_management}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Activity Log",
    path: "/staff-logs",
    icon: (
      <img
        className="navIcon"
        src={staff_logs}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  // {
  //   title: '',
  //   icon: (
  //     <div style={{ display: 'flex', alignItems: 'center' }}>
  //       <img className='navIcon' src={ticketing} alt="Custom Icon" style={{ width: '24px', height: '24px' }} />
  //       <span style={{ marginLeft: '16px' }}>Ticketing</span>
  //       <FiChevronDown style={{ marginLeft: '20px' }} />
  //     </div>
  //   ),
  //   cName: 'nav-text',
  //   submenu: [
  //     {
  //       title: "Generate Ticket",
  //       path: "/generate-tickets",
  //       icon: (
  //         <img
  //           className="navIcon"
  //           src={generate_ticket}
  //           alt="Custom Icon"
  //           style={{ width: "24px", height: "24px" }}
  //         />
  //       ),
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Tickets History",
  //       path: "/tickets-history",
  //       icon: (
  //         <img
  //           className="navIcon"
  //           src={tickets_history}
  //           alt="Custom Icon"
  //           style={{ width: "24px", height: "24px" }}
  //         />
  //       ),
  //       cName: "nav-text",
  //     },
  //   ],
  // },
  {
    title: "Branches",
    path: "/branches",
    icon: (
      <img
        className="navIcon"
        src={branches}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Resources",
    path: "/resources-list",
    icon: (
      <img
        className="navIcon"
        src={upload_resources}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: (
      <img
        className="navIcon"
        src={log_out}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
    onClick: (event, logout) => logout(event),
  },
];

export const StaffSidebarData = [
  {
    title: "Generate Ticket",
    path: "/generate-tickets",
    icon: (
      <img
        className="navIcon"
        src={generate_ticket}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  
  {
    title: "View Resources",
    path: "/resources-list",
    icon: (
      <img
        className="navIcon"
        src={upload_resources}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
  },
  // {
  //   title: 'Queue List',
  //   path: '/queue-list',
  //   icon: <img src={queue_list} alt="Custom Icon" style={{ width: '24px', height: '24px' }} />,
  //   cName: 'nav-text'
  // },
  {
    title: "Logout",
    path: "/",
    icon: (
      <img
        className="navIcon"
        src={log_out}
        alt="Custom Icon"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    cName: "nav-text",
    onClick: (event, logout) => logout(event),
  },
];
