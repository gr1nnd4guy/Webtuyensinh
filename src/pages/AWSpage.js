import React from "react";
import "./style.css";
import RegistrationForm from "./Form";

function AWS() {
  const textheadStyle = {
    color: "#f27f24",
    fontSize: "40px",
  };
  const textpStyle = {
    color: "black",
    fontSize: "19px",
  };

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <section className="">
        <img
          src={
            "https://ispace.edu.vn/wp-content/uploads/2021/12/banner-1920x550-Template-scaled.jpeg"
          }
          alt="course"
          className="img-fluid pt-2 rounded img-thumbnail"
          width="100%"
        />
      </section>

      <section>
        <div className="container">
          <div className="row pt-5">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Khoá học AWS Cloud Foundation
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row pt-1">
          <div className="col-md text-start fw-normal" style={textpStyle}>
            <ul className="fw-semibold fs-4">
              <li>
                Là một trong những dịch vụ cloud computing lớn nhất thế giới
                hiện nay.
              </li>
              <li>
                Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm
                (và không nên làm) để xây dựng một hệ thống tốt trên cloud Chứng
                chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570,
                ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ
                hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.{" "}
              </li>
              <li>
                Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.{" "}
              </li>
              <li>
                Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo
                mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật
                thông tin hàng đầu.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pt-5">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Lộ trình học
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="row d-flex justify-content-center">
          <img
            className="mt-5 col-md-6"
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg"
            alt="chuongtrinh"
            width="50%"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pt-5">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Thông tin khoá học
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row pt-1">
          <div
            className="col-md-8 text-start fw-normal mt-5"
            style={textpStyle}
          >
            <ul className="fw-semibold fs-4">
              <li>
                Tên khóa học:{" "}
                <span className="fw-bold">
                AWS Cloud Foundation
                </span>
              </li>
              <li>
                Giảng viên: {" "}
                <span className="fw-bold">Ths. Lê Hoàng Bình Nguyên</span>
              </li>
              <li>Thời lượng: 20h, mỗi buổi 2h</li>
              <li>Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
              <li>Yêu cầu học viên: có kiến thức CNTT cơ bản, có máy tính hoặc laptop</li>
              <li>Hình thức: offline</li>
              <li>
                Học phí trọn khóa: 2.500.000 VND (chưa bao gồm lệ phí thi)
              </li>
            </ul>
          </div>
          <div className="col-md-4 img-fluid">
            <img
              width="100%"
              src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-2048x1774.jpg"
              alt="coursepic"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pt-5">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Thông tin giảng viên
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row pt-1">
          <div
            className="col-md-7 col-lg-8 text-start fw-normal mt-5"
            style={textpStyle}
          >
            <ul className="fw-semibold fs-4 mt-5">
              
              <li>
                Giảng viên: {" "}
                <span className="fw-bold">Ths. Lê Hoàng Bình Nguyên</span>
              </li>
              <li className="fw-light">Phó trưởng khoa Công nghệ thông tin</li>
              <li className="fw-light">Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt Nam.</li>
              <li className="fw-light">Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho sinh viên.</li>
              <li className="fw-light">Sở hữu chứng chỉ <span className="fw-semibold">AWS Certified Solutions Architect và AWS Certified Developer – Associate</span> về điện toán đám mây.</li>
              <li className="fw-light">
              Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là sinh viên: <span className="fw-semibold">Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên quốc tế ICPC,…</span>
              </li>
              <li className="fw-light">
              Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng viên các trường đại học, cao đẳng của Việt Nam và hiện là giảng viên chính thức của chương trình AWS/ReStart Việt Nam.
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-lg-3  img-fluid">
            <img
              width="100%"
              src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg"
              alt="coursepic"
            />
          </div>
        </div>
      </section>
      
        
      <section className="pb-5" style={{ background: "#f5f5f5" }}>
        <div className="container">
          <div className="row pt-4 ">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Form đăng ký
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-6">
              <RegistrationForm />
            </div>
            <div className="col-6 mt-5">
              <img
                src={
                  "https://www.perforce.com/sites/default/files/styles/social_preview_image/public/image/2020-01/image-blog-future-software-development.png?itok=eO9Fa9k-"
                }
                alt="course"
                className="img-fluid rounded img-thumbnail"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AWS;
