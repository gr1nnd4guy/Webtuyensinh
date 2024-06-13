import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavBar = () => {
    const [showNganhHoc, setShowNganhHoc] = useState(false);
    const [showKhoahoc, setShowKhoahoc] = useState(false);
    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    });
    
    const textStyle = {
      color: 'black',
      fontSize: '15px',
      fontWeight: 'bold',
    };

    return (
      <header  className={`headerMain ${scroll ? "sticky" : ""}`} >
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid m-3">
          <Link className="navbar-brand" to="/">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png"
              alt="ispaceicon"
              width="200"
              height="50"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={textStyle} to="/Home">
                  Trang chủ
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowKhoahoc(true)}
                onMouseLeave={() => setShowKhoahoc(false)}
              >
                <Link className="nav-link dropdown-toggle" to="#" id="shortCoursesDropdown" style={textStyle} role="button" aria-expanded={showKhoahoc}>
                  Khoá học ngắn hạn
                </Link>
                {showKhoahoc && (
                  <ul className="dropdown-menu show text-center" aria-labelledby="shortCoursesDropdown">
                    <li>
                      <Link className="dropdown-item " to="/CEH">
                        Khoá học CEH
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/AWS">
                        Khoá học AWS Cloud Foundation
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowNganhHoc(true)}
                onMouseLeave={() => setShowNganhHoc(false)}
              >
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" style={textStyle} role="button" aria-expanded={showNganhHoc}>
                  Ngành học
                </Link>
                {showNganhHoc && (
                  <ul className="dropdown-menu show text-center" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/ANM">
                        An ninh mạng
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/LTMT">
                        Lập trình máy tính
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/TKDH">
                        Thiết kế đồ hoạ
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              <li className="nav-item" style={textStyle}>
                <Link className="nav-link" to="/Reg">
                  Đăng ký
                </Link>
              </li>
              <li className="nav-item" style={textStyle}>
                <Link className="nav-link" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
      
      
    );
    
};


export default NavBar;
