import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminSidebarData, StaffSidebarData } from "./SideBarData";
import "./SideBar.css";
import { IconContext } from "react-icons";
import profile_avatar from "../../assets/images/profile_avatar.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/authContext";
import axiosInstance from "../../../axiosInstance";
import check from "../../assets/images/check.png";
import Swal from "sweetalert2";

function Navbar({ role }) {
  const navigate = useNavigate();
  const sidebarData = role === "Admin" ? AdminSidebarData : StaffSidebarData;
  const { logout } = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [openMenu, setOpenMenu] = useState(true);
  const [position, setPosition] = useState({ left: "5px" });
  const isMobile = window.innerWidth <= 768;
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setDropdownOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Set openMenu to false if isMobile is true
    if (isMobile) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true); // Optionally set to true when not mobile
    }
  }, [isMobile]);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setPosition((prevPosition) => ({
      left: prevPosition.left === "190px" ? "5px" : "190px",
    }));
  };

  useEffect(() => {
    // Fetch current user details
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get("/user");
        const { first_name, last_name } = response.data;
        setFirstName(first_name);
        setLastName(last_name);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
    const updateTime = () => {
      const date = new Date();

      const optionsDate = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", optionsDate);

      const optionsTime = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "Australia/Sydney",
      };
      const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

      // Add <br /> between date and time
      setCurrentTime(
        <>
          {formattedDate} <br /> {formattedTime}
        </>
      );
    };

    const timerId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timerId);
  }, []);

  const handleLogout = async () => {
    // e.preventDefault();
    Swal.fire({
      title: "Log Out!",
      text: "Do you really want to log out?",
      showCancelButton: true,
      icon: "warning",
      confirmButtonColor: "#EC221F",
      cancelButtonColor: "#00000000",
      cancelTextColor: "#000000",
      confirmButtonText: "Yes",
      customClass: {
        container: "custom-container",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
        title: "custom-swal-title",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.post(`/logout`);
          logout();
          navigate("/login");
          // Swal.fire({
          //   title: "Logged Out!",
          //   text: "You have been logged out successfully.",
          //   imageUrl: check,
          //   imageWidth: 100,
          //   imageHeight: 100,
          //   confirmButtonText: "OK",
          //   confirmButtonColor: "#0ABAA6",
          //   customClass: {
          //     confirmButton: "custom-success-confirm-button",
          //     title: "custom-swal-title",
          //   },
          // }).then(() => {
          //   navigate("/login");
          // });
        } catch {}
      }
    });
  };

  const handleItemClick = (index, item) => {
    if (item.title === "Logout") {
      handleLogout();
    } else if (item.submenu) {
      handleDropdownToggle(index);
    } else {
      navigate(item.path);
      setActiveIndex(index);
      if (isMobile) {
        setOpenMenu(false);
        setPosition((prevPosition) => ({
          left: prevPosition.left === "190px" ? "5px" : "190px",
        }));
      }
    }
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div
          onClick={toggleMenu}
          className="toggle-btn"
          style={{ position: "fixed", left: position.left }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="sidebar-nav">
          <div className="sticky-header">
            <div className="profile" onClick={() => navigate("/my-profile")}>
              <img
                src={profile_avatar}
                className="profile_avatar"
                alt="Profile Avatar"
              />
              <h5>
                Hello, {first_name} {last_name}
              </h5>
            </div>
          </div>

          <hr className="profile-divider" />

          {openMenu ? (
            <div>
              <nav className="nav-menu active">
                <div className="logo">
                  <svg
                    width="175"
                    height="65"
                    viewBox="0 0 200 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.8019 66.0751V40.8997C86.8019 40.2589 87.1681 39.8927 87.8089 39.8927H99.9846C104.013 39.8927 108.407 42.9137 108.407 49.0474C108.407 53.5332 106.027 56.3711 103.189 57.5155L108.224 65.8462C108.636 66.5328 108.361 67.0363 107.537 67.0363H102.639C102.09 67.0363 101.724 66.8533 101.449 66.3497L96.4601 58.1563H92.8897V66.0293C92.8897 66.6702 92.5235 67.0363 91.8827 67.0363H87.7631C87.1681 67.0821 86.8019 66.7159 86.8019 66.0751ZM98.9318 52.2973C100.671 52.2973 102.273 51.153 102.273 49.0932C102.273 46.9876 100.671 45.9348 98.9318 45.9348H92.9355V52.3431H98.9318V52.2973Z"
                      fill="white"
                    />
                    <path
                      d="M109.643 57.4696C109.643 51.7479 113.396 47.491 119.255 47.491C125.023 47.491 128.547 51.7479 128.547 57.4696V58.0646C128.547 58.7055 128.181 59.0716 127.54 59.0716H115.411C115.914 61.223 117.516 62.4589 119.484 62.4589C121.178 62.4589 122.231 61.9096 122.917 61.3145C123.375 60.9484 123.787 60.811 124.291 61.1772L126.762 63.0082C127.312 63.4201 127.449 63.8779 127.037 64.2898C125.343 66.2581 122.643 67.4482 119.484 67.4482C113.534 67.5397 109.643 63.1912 109.643 57.4696ZM122.963 55.364C122.46 53.5331 121.27 52.2056 119.301 52.2056C117.379 52.2056 116.097 53.3957 115.548 55.364H122.963Z"
                      fill="white"
                    />
                    <path
                      d="M135.825 66.3042L129.005 49.0477C128.776 48.3611 129.051 47.8575 129.783 47.8575H133.857C134.406 47.8575 134.772 48.0864 135.001 48.6357L139.029 58.9805L143.103 48.6357C143.332 48.1322 143.698 47.8575 144.247 47.8575H148.321C149.054 47.8575 149.42 48.3611 149.099 49.0477L142.188 66.3042C141.959 66.8077 141.593 67.0824 141.043 67.0824H136.969C136.42 67.0824 136.008 66.8077 135.825 66.3042Z"
                      fill="white"
                    />
                    <path
                      d="M151.388 42.1817C151.388 40.1677 153.036 39.0691 154.546 39.0691C156.148 39.0691 157.75 40.1677 157.75 42.1817C157.75 44.2415 156.103 45.4316 154.546 45.4316C153.036 45.4316 151.388 44.2415 151.388 42.1817ZM151.617 66.0754V48.8646C151.617 48.2238 151.983 47.8576 152.624 47.8576H156.652C157.293 47.8576 157.659 48.2238 157.659 48.8646L157.613 66.0754C157.613 66.7162 157.247 67.0824 156.606 67.0824H152.624C151.983 67.0824 151.617 66.7162 151.617 66.0754Z"
                      fill="white"
                    />
                    <path
                      d="M167.134 66.3042L160.314 49.0477C160.085 48.3611 160.36 47.8575 161.092 47.8575H165.166C165.715 47.8575 166.082 48.0864 166.31 48.6357L170.338 58.9805L174.412 48.6357C174.641 48.1322 175.007 47.8575 175.557 47.8575H179.63C180.363 47.8575 180.729 48.3611 180.409 49.0477L173.497 66.3042C173.268 66.8077 172.902 67.0824 172.352 67.0824H168.279C167.729 67.0824 167.317 66.8077 167.134 66.3042Z"
                      fill="white"
                    />
                    <path
                      d="M181.095 57.4696C181.095 51.7479 184.848 47.491 190.707 47.491C196.475 47.491 199.999 51.7479 199.999 57.4696V58.0646C199.999 58.7055 199.633 59.0716 198.992 59.0716H186.862C187.366 61.223 188.968 62.4589 190.936 62.4589C192.63 62.4589 193.683 61.9096 194.369 61.3145C194.827 60.9484 195.239 60.811 195.742 61.1772L198.214 63.0082C198.763 63.4201 198.901 63.8779 198.489 64.2898C196.795 66.2581 194.095 67.4482 190.936 67.4482C184.986 67.5397 181.095 63.1912 181.095 57.4696ZM194.369 55.364C193.866 53.5331 192.676 52.2056 190.707 52.2056C188.785 52.2056 187.503 53.3957 186.954 55.364H194.369Z"
                      fill="white"
                    />
                    <path
                      d="M99.0236 77.6558C99.0236 80.448 96.9638 82.5536 94.3547 82.5536H87.8548V89.5111C87.8548 89.6484 87.7633 89.7858 87.5802 89.7858H87.0767C86.9394 89.7858 86.8021 89.6942 86.8021 89.5111V72.9869C86.8021 72.8496 86.8936 72.7123 87.0767 72.7123H94.3547C96.918 72.7123 99.0236 74.8179 99.0236 77.6558ZM97.9708 77.6558C97.9708 75.596 96.4602 73.7651 94.2631 73.7651H87.8548V81.5466H94.2631C96.4602 81.5008 97.9708 79.7156 97.9708 77.6558Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M112.069 82.3246V89.511C112.069 89.6483 111.977 89.7856 111.794 89.7856H111.336C111.199 89.7856 111.062 89.6941 111.062 89.511V82.4161C111.062 79.9901 109.368 78.4338 106.988 78.4338C104.608 78.4338 102.96 79.9901 102.96 82.4161V89.511C102.96 89.6483 102.868 89.7856 102.685 89.7856H102.228C102.09 89.7856 101.953 89.6941 101.953 89.511V72.9868C101.953 72.8495 102.044 72.7122 102.228 72.7122H102.685C102.823 72.7122 102.96 72.8037 102.96 72.9868V79.7155C103.83 78.205 105.478 77.5184 107.171 77.5184C109.826 77.5184 112.069 79.0747 112.069 82.3246Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M126.808 77.7014H127.265C127.403 77.7014 127.54 77.7929 127.54 77.976V89.5109C127.54 89.6483 127.449 89.7856 127.265 89.7856H126.808C126.67 89.7856 126.533 89.694 126.533 89.5109V86.8561C125.618 88.7328 123.787 89.9687 121.361 89.9687C117.836 89.9687 115.364 87.3138 115.364 83.6977C115.364 80.0816 117.836 77.4725 121.361 77.4725C123.787 77.4725 125.618 78.6626 126.533 80.5851V77.9303C126.533 77.7929 126.625 77.7014 126.808 77.7014ZM126.533 83.7435C126.533 80.6767 124.519 78.4795 121.452 78.4795C118.385 78.4795 116.326 80.6767 116.326 83.7435C116.326 86.8103 118.385 89.0532 121.452 89.0532C124.519 89.0532 126.533 86.8103 126.533 83.7435Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M136.054 77.5181C136.192 77.5181 136.329 77.6096 136.329 77.7927V78.2047C136.329 78.342 136.237 78.4793 136.054 78.4793C133.857 78.6166 132.072 80.1272 132.072 82.6447V89.5565C132.072 89.6938 131.98 89.8311 131.797 89.8311H131.34C131.202 89.8311 131.065 89.7396 131.065 89.5565V78.0216C131.065 77.8843 131.156 77.7469 131.34 77.7469H131.797C131.935 77.7469 132.072 77.8385 132.072 78.0216V79.9898C132.85 78.4335 134.361 77.6096 136.054 77.5181Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M156.835 82.3243V89.5107C156.835 89.648 156.744 89.7853 156.561 89.7853H156.103C155.966 89.7853 155.828 89.6938 155.828 89.5107V82.3701C155.828 79.761 154.272 78.4335 152.121 78.4335C150.015 78.4335 148.459 79.761 148.459 82.3701V89.5107C148.459 89.648 148.367 89.7853 148.184 89.7853H147.727C147.589 89.7853 147.452 89.6938 147.452 89.5107V82.3701C147.452 79.761 145.896 78.4335 143.79 78.4335C141.684 78.4335 140.082 79.761 140.082 82.3701V89.5107C140.082 89.648 139.991 89.7853 139.808 89.7853H139.35C139.213 89.7853 139.075 89.6938 139.075 89.5107V77.9758C139.075 77.8385 139.167 77.7012 139.35 77.7012H139.808C139.945 77.7012 140.082 77.7927 140.082 77.9758V79.5779C140.906 78.1589 142.371 77.5181 143.927 77.5181C145.667 77.5181 147.36 78.2962 148.093 80.1729C148.871 78.2962 150.564 77.5181 152.304 77.5181C154.638 77.5181 156.835 78.8455 156.835 82.3243Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M171.483 77.7014H171.941C172.078 77.7014 172.215 77.7929 172.215 77.976V89.5109C172.215 89.6483 172.124 89.7856 171.941 89.7856H171.483C171.346 89.7856 171.208 89.694 171.208 89.5109V86.8561C170.293 88.7328 168.462 89.9687 166.036 89.9687C162.511 89.9687 160.04 87.3138 160.04 83.6977C160.04 80.0816 162.511 77.4725 166.036 77.4725C168.462 77.4725 170.293 78.6626 171.208 80.5851V77.9303C171.254 77.7929 171.346 77.7014 171.483 77.7014ZM171.254 83.7435C171.254 80.6767 169.24 78.4795 166.173 78.4795C163.106 78.4795 161.047 80.6767 161.047 83.7435C161.047 86.8103 163.106 89.0532 166.173 89.0532C169.24 89.0532 171.254 86.8103 171.254 83.7435Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M185.581 80.2647C184.665 79.1661 183.338 78.4338 181.598 78.4338C178.486 78.4338 176.472 80.6309 176.472 83.6977C176.472 86.7645 178.531 89.0074 181.598 89.0074C183.338 89.0074 184.711 88.2751 185.581 87.1765C185.672 87.0392 185.809 87.0392 185.947 87.1307L186.267 87.3596C186.405 87.4511 186.405 87.5885 186.313 87.7258C185.26 89.099 183.567 89.9687 181.553 89.9687C177.936 89.9687 175.465 87.3138 175.465 83.6977C175.465 80.0816 177.982 77.4725 181.553 77.4725C183.567 77.4725 185.26 78.2965 186.313 79.6697C186.405 79.807 186.405 79.9443 186.267 80.0358L185.947 80.2647C185.809 80.402 185.672 80.402 185.581 80.2647Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M198.123 77.701H198.626C198.809 77.701 198.901 77.8384 198.809 78.0215L192.309 94.4084C192.264 94.5457 192.172 94.6372 192.035 94.6372H191.577C191.394 94.6372 191.302 94.4999 191.394 94.3168L193.179 89.7852L188.556 78.0672C188.464 77.8841 188.556 77.7468 188.739 77.7468H189.243C189.38 77.7468 189.471 77.7926 189.517 77.9757L193.683 88.5036L197.848 77.9757C197.894 77.7468 198.031 77.701 198.123 77.701Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M60.5744 34.3084L60.4371 34.2168L60.3913 34.171L19.653 1.62613C16.9066 -0.708312 13.8398 -0.479446 11.368 1.99232C8.89622 4.46409 8.66736 7.53091 11.0018 10.2773L43.5925 51.0614L43.684 51.1988C43.9129 51.4734 44.1418 51.748 44.4164 51.9769C49.0853 56.6458 56.6837 56.6458 61.3526 51.9769C66.0215 47.308 66.0215 39.7096 61.3526 35.0407C61.0779 34.7661 60.8491 34.5372 60.5744 34.3084Z"
                      fill="#B6CC4A"
                    />
                    <path
                      d="M10.6353 41.678C10.1776 39.8012 9.71986 37.7872 9.35368 35.6816C8.48398 35.7274 6.10376 36.0936 5.14252 38.428L6.3784 41.6322C6.79036 42.685 6.46995 43.9209 5.60026 44.6075C1.34333 48.132 -1.08267 53.5333 0.473631 60.3993C5.27984 81.1804 26.6103 93.7681 47.4372 89.0992C76.2744 82.6452 78.9293 54.9523 73.9858 40.854C73.5738 39.7097 71.9259 39.9386 71.7886 41.1287C71.0563 48.9559 66.0212 58.7514 57.0038 60.7655C48.5357 62.6422 40.0219 58.7972 35.8565 51.7023C32.6524 46.2553 27.7546 41.1745 21.621 40.259C19.6069 39.9843 17.5471 39.9843 15.5331 40.259C14.1141 40.4421 13.1986 41.8153 13.4733 43.1885C14.4803 48.3609 17.1809 58.5226 23.5892 66.0752C23.7265 66.2583 23.4977 66.4872 23.3146 66.3498C20.7055 64.1985 14.938 58.0648 10.9557 43.2343L10.6353 41.678Z"
                      fill="#B6CC4A"
                    />
                    <path
                      d="M60.5742 34.3085L60.4369 34.2169L60.3911 34.1712L54.8983 29.7769C30.9588 27.5798 16.5859 17.235 16.5859 17.235L43.5923 51.0158L43.6838 51.1531C43.9127 51.4277 44.1415 51.7024 44.4162 51.9312C49.0851 56.6001 56.6835 56.6001 61.3524 51.9312C66.0212 47.2624 66.0212 39.664 61.3524 34.9951C61.0777 34.7662 60.8488 34.5373 60.5742 34.3085Z"
                      fill="url(#paint0_linear_172_1343)"
                    />
                    <path
                      d="M73.9856 40.8999C73.5736 39.7556 71.9258 39.9845 71.7885 41.1746C71.3765 45.3857 69.7287 50.192 66.8907 54.0369C47.437 83.927 4.59307 70.6069 4.45575 70.5611C12.7865 85.0713 30.272 92.9443 47.437 89.0994C76.2743 82.6911 78.9291 54.9982 73.9856 40.8999Z"
                      fill="url(#paint1_linear_172_1343)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_172_1343"
                        x1="14.2532"
                        y1="6.59779"
                        x2="60.8583"
                        y2="51.1223"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B6CC4A" />
                        <stop offset="1" stopColor="#ABBA42" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_172_1343"
                        x1="25.29"
                        y1="41.8172"
                        x2="66.1836"
                        y2="84.6698"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B6CC4A" />
                        <stop offset="0.8603" stopColor="#ABBA42" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="time-display text-center">
                    <h6>Welcome, {first_name}!</h6>
                    <p>{currentTime}</p>
                  </div>
                </div>

                <div className="curve"></div>
                <ul className="nav-menu-items">
                  {sidebarData.map((item, index) => (
                    <React.Fragment key={index}>
                      <li
                        className={`${item.cName} sidebar-nav-list ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleItemClick(index, item)}
                      >
                        <Link
                          className="sidebar-nav-link"
                          to={item.title !== "Logout" ? item.path : null}
                        >
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>

                      {item.submenu && dropdownOpenIndex === index && (
                        <ul className="nav-menu-items submenu">
                          {item.submenu.map((subItem, subIndex) => (
                            <React.Fragment key={subIndex}>
                               {subIndex < item.submenu.length - 1 && ( // Add divider only if it's not the last item
                                <hr className="nav-divider" />
                              )}
                              <li
                                className="nav-text sidebar-nav-list"
                                onClick={() => handleItemClick(index, subItem)}
                              >
                                <Link
                                  className="sidebar-nav-link"
                                  to={subItem.path}
                                > {subItem.icon}
                                  <span>{subItem.title}</span>
                                 
                                </Link>
                              </li>
                             
                            </React.Fragment>
                          ))}
                        </ul>
                      )}

                      {index < sidebarData.length - 1 && (
                        <hr className="nav-divider" />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
