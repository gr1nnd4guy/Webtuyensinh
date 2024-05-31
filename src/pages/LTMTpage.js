import React from "react";
import "./style.css";
import banner from "../pages/imgs/bn-ptpm.jpg";
import RegistrationForm from "./Form";

function LTW() {
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
          src={banner}
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
              Tổng quan ngành Lập trình máy tính
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row pt-1">
          <div className="col-md text-start fw-normal" style={textpStyle}>
            Trường iSpace là một trong những cơ sở giáo dục uy tín tại Việt Nam,
            chuyên đào tạo về công nghệ thông tin và lập trình máy tính. Ngành
            lập trình máy tính tại iSpace được thiết kế nhằm trang bị cho sinh
            viên kiến thức và kỹ năng cần thiết để đáp ứng nhu cầu ngày càng cao
            của thị trường công nghệ thông tin hiện nay. Chương trình đào tạo
            tại iSpace được xây dựng một cách bài bản, bao gồm các môn học từ cơ
            bản đến nâng cao. Sinh viên sẽ được học các ngôn ngữ lập trình phổ
            biến như Python, Java, C++, và JavaScript. Ngoài ra, trường còn chú
            trọng đến các kỹ năng mềm như làm việc nhóm, quản lý dự án và giải
            quyết vấn đề, giúp sinh viên không chỉ giỏi về kỹ thuật mà còn thành
            thạo trong môi trường làm việc thực tế. Một điểm nổi bật của ngành
            lập trình máy tính tại iSpace là việc kết hợp giữa lý thuyết và thực
            hành. Sinh viên có cơ hội tham gia các dự án thực tế, thực tập tại
            các công ty công nghệ hàng đầu, từ đó rèn luyện kỹ năng thực tiễn và
            tích lũy kinh nghiệm quý báu. Trường cũng thường xuyên tổ chức các
            buổi hội thảo, tọa đàm với sự tham gia của các chuyên gia trong
            ngành, tạo điều kiện cho sinh viên cập nhật kiến thức mới và mở rộng
            mạng lưới quan hệ. Với đội ngũ giảng viên giàu kinh nghiệm và chương
            trình đào tạo chất lượng, iSpace cam kết mang đến cho sinh viên một
            môi trường học tập tiên tiến và hiện đại, giúp họ tự tin bước vào
            ngành công nghiệp công nghệ thông tin đầy cạnh tranh.
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
        <div className="container">
          <div className="row pt-1">
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK1.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK2.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK3.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK4.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK5.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK6.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg text-start fw-normal"
              style={textpStyle}
            >
              <div className="card border-0" style={{ background: "white" }}>
                <div className="card-body">
                  <img
                    src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png"
                    alt="course"
                    className="card-img-top pt-2 rounded "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="row-md text-start fw-normal d-flex justify-content-center "
            style={textpStyle}
          >
            <div
              className="card col-md-auto border-0"
              style={{ background: "white" }}
            >
              <div className="card-body">
                <img
                  src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
                  alt="course"
                  className="card-img-top pt-2 rounded "
                  style={{ width: "100%" }}
                />
              </div>
            </div>
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

export default LTW;
