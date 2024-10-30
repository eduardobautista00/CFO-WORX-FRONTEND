import React from "react";
import users_list from "../../assets/images/users_list.png";
import users_management from "../../assets/images/users_management.png";
import staff_logs from "../../assets/images/staff_logs.png";
import tickets_history from "../../assets/images/tickets_history.png";
import branches from "../../assets/images/branches.png";
import log_out from "../../assets/images/log_out.png";
import generate_ticket from "../../assets/images/generate_ticket.png";
import upload_resources from "../../assets/images/upload_resources.png";
import queue_list from "../../assets/images/queue_list.png";
import "./SideBar.css";
import { FiChevronDown } from 'react-icons/fi'; // Importing the Chevron Down icon


export const AdminSidebarData = [
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
  {
    title: '',
    icon: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className='navIcon' src={generate_ticket} alt="Custom Icon" style={{ width: '24px', height: '24px' }} />
        <span style={{ marginLeft: '16px' }}>Ticket Generation</span>
        <FiChevronDown style={{ marginLeft: '20px' }} />
      </div>
    ),
    cName: 'nav-text',
    submenu: [
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
        title: "Tickets History",
        path: "/tickets-history",
        icon: (
          <img
            className="navIcon"
            src={tickets_history}
            alt="Custom Icon"
            style={{ width: "24px", height: "24px" }}
          />
        ),
        cName: "nav-text",
      },
    ],
  },
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
    title: "History",
    path: "/history",
    icon: (
      <img
        className="navIcon"
        src={tickets_history}
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
