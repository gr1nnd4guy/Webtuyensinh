import React from "react";
import "./style.css";
import RegistrationForm from "./Form";

function CEH() {
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
          src={"https://ispace.edu.vn/wp-content/uploads/2021/12/banner-1920x550-Template-scaled.jpeg"}
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
              Khoá học CEH
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row pt-1">
          <div className="col-md text-start fw-normal" style={textpStyle}>
            <ul className="fw-semibold fs-4">
                <li>
                CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được công nhận rộng rãi và có giá trị cao trên thị trường.
                </li>
                <li>
                Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng, trang bị cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ mạng của tổ chức, doanh nghiệp.                </li>
                <li>
                Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570, ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.                </li>
                <li>
                Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với các chuyên gia bảo mật thông tin khác trên toàn thế giới.
                </li>
                <li>
                Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật thông tin hàng đầu.
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
          <img className="mt-5 col-m col-lg-6" src="https://ispace.edu.vn/wp-content/uploads/2023/09/chuong-trinh-hoc-ceh-scaled.jpg" alt="chuongtrinh"/>
         
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
          <div className="col-md-8 text-start fw-normal mt-5" style={textpStyle}>
            <ul className="fw-semibold fs-4">
                <li>
                Tên khóa học: <span className="fw-bold">CEH (V12) Certified Ethical Hacker</span>
                </li>
                <li>
                Giảng viên: thầy <span className="fw-bold">Trương Phạm Hoài Thương</span>
                </li>
                <li>
                Thời lượng: 40h, mỗi buổi 2h</li>
                <li>
                Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30
                </li>
                <li>
                Hình thức: offline
                </li>
                <li>
                Học phí trọn khóa: 6.500.000 VND (chưa bao gồm lệ phí thi)
                </li>
            </ul>
          </div>
          <div className="col-md-4 img-fluid">
            <img width="100%" src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-2048x1774.jpg" alt="coursepic"/>
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

export default CEH;
