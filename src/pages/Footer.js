import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

const textStyle = {
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
};
const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center" >
      <div className="container p-4">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1 button_top"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto mt-1">
                <p className="pt-2">
                  <strong>Email của bạn:</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div data-mdb-input-init className="form-outline mb-4 mt-2">
                  <input
                    type="email"
                    id="form5Example24"
                    className="form-control"
                  />
                  
                </div>
              </div>

              <div className="col-auto">
                <button
                  data-mdb-ripple-init
                  type="submit"
                  className="btn btn-outline mb-4"
                >
                  <p className="button_top" style={{borderRadius:'10px', fontWeight:'bold'}}>Đăng ký</p>
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Kết nối với chúng tôi qua mạng xã hội để cập nhật thông tin mới nhất
          </p>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={textStyle}>Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" style={{ textDecoration: 'none' }} href="https://www.facebook.com/ispace.vn">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: 'none' }} href="https://www.youtube.com/user/ispacechannel">
                    Youtube
                  </a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: 'none' }} href="https://www.tiktok.com/@caodanganninhmangispace">
                  Tiktok
                  </a>
                </li>
                
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase" style={textStyle}>Contacts</h5>

              <ul className="list-unstyled mb-0">
                <li style={{ textDecoration: 'none' }}>
                  
                  Learning By Doing
                  
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: 'none' }} href="#!">
                  0938 205 966 
                  </a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: 'none' }} href="#!">
                  quangcao@ispace.edu.vn
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" style={{textDecoration: 'none'}} href="https://mdbootstrap.com/">
          HuynhTienPhong
        </a>
      </div>
    </footer>
  );
};

export default Footer;
