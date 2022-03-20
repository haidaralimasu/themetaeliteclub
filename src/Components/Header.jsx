import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import opensea from "./opensea.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

export default function Header() {
  const history = useHistory();

  const toogle = () => {
    document.querySelector(".sidebar").classList.toggle("on");
  };
  window.onscroll = () => {
    if (window.scrollY > 133) {
      document.querySelector(".round-toogler").style = "opacity:1 !important;";
    } else {
      document.querySelector(".round-toogler").style = "opacity:0 !important;";
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            {/* <img
              src="assets/images/logo.webp"
              alt=""
              onClick={() => history.push("/")}
            /> */}
            TMEC
          </Navbar.Brand>
          <span
            style={{ cursour: "pointer" }}
            className="d-lg-none d-flex menu-btn"
            onClick={toogle}
          >
            MENU
          </span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col d-flex justify-content-between align-items-lg-center ">
              <div className="d-flex col  flex-lg-row flex-column algn-items-lg-center align-items-start ">
                <Link
                  style={{ cursor: "pointer" }}
                  className="nav-link active "
                >
                  PROJECT
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  ROADMAP
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  BENEFITS
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  TEAM
                </Link>
                <Link style={{ cursor: "pointer" }} to="" className="nav-link">
                  FAQ
                </Link>
                <div style={{ display: "flex", marginLeft: "80px" }}>
                  <Link
                    style={{ cursor: "pointer" }}
                    to=""
                    className="nav-link"
                  >
                    <FaInstagram style={{ fontSize: 30 }} />
                  </Link>
                  <Link
                    style={{ cursor: "pointer" }}
                    to=""
                    className="nav-link"
                  >
                    <FaTwitter style={{ fontSize: 30 }} />
                  </Link>
                  <Link
                    style={{ cursor: "pointer" }}
                    to=""
                    className="nav-link"
                  >
                    <BsDiscord style={{ fontSize: 30 }} />
                  </Link>
                  <Link
                    style={{ cursor: "pointer" }}
                    to=""
                    className="nav-link"
                  >
                    <img style={{ height: "30px" }} src={opensea} />
                  </Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="sidebar py-2 px-3">
        <div className="d-flex w-100 justify-content-end  ">
          <MdClose
            style={{ cursor: "pointer" }}
            className="fs-1 text-light"
            onClick={toogle}
          />
        </div>
        <Link to="" className="nav-link active  fs-5 pb-4">
          PROJECT
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          ROADMAP
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          BENEFITS
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          TEAM
        </Link>
        <Link to="" className="nav-link fs-5 pb-4">
          FAQ
        </Link>
      </div>
      {/* <div className="round-toogler" onClick={toogle}>
        <AiOutlineMenu style={{ cursor: "pointer", color: "#b29700" }} />
      </div> */}
    </>
  );
}
