import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import banner from "../pages/imgs/bn-anm.jpg";
import RegistrationForm from "./Form";

function ANM() {
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
              Tổng quan ngành An ninh mạng
            </div>
          </div>
        </div>
        
      </section>
      <section className="container">
      <div className="row pt-1">
          <div className="col-md text-start fw-normal" style={textpStyle}>
            Ngành An ninh mạng tại trường iSpace không chỉ trang bị cho sinh
            viên nền tảng kiến thức chuyên sâu về hệ thống mạng, mã hóa, bảo mật
            dữ liệu mà còn chú trọng phát triển kỹ năng thực hành như phân tích
            lỗ hổng, đánh giá rủi ro, ứng phó sự cố an ninh. Sinh viên được tiếp
            cận với môi trường học tập hiện đại, phòng thực hành với các công
            nghệ tiên tiến, cùng đội ngũ giảng viên giàu kinh nghiệm, là các
            chuyên gia trong lĩnh vực an ninh mạng. Chương trình đào tạo tập
            trung vào các lĩnh vực trọng yếu như an ninh hệ thống, an ninh ứng
            dụng web, an ninh di động, an ninh đám mây, giúp sinh viên sẵn sàng
            đảm nhận các vị trí công việc hấp dẫn trong các doanh nghiệp, tổ
            chức chính phủ và các công ty an ninh mạng hàng đầu.
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
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK1.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK2.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK3.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK4.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK5.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK6.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg text-start fw-normal" style={textpStyle}>
                <div className="card border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="row-md text-start fw-normal d-flex justify-content-center " style={textpStyle}>
                <div className="card col-md-auto border-0" style={{background:'white',}}>
                    <div className="card-body">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
        </div>
      </section>
      <section className="pb-5" style={{background:'#f5f5f5'}}>
        <div className="container">
          <div className="row pt-4 ">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Form đăng ký
            </div>
          </div>
          <div className="row pt-1" >
            <div className="col-6">
            <RegistrationForm/>
            </div>
            <div className="col-6 ">
                <ul>
                    <li>
                        <Link to="/LTMT" style={{textDecoration:'none', color:'black'}}>Lập trình máy tính</Link>

                    </li>
                    <li>
                        <Link to="/LTMT" style={{textDecoration:'none', color:'black'}}>Lập trình máy tính</Link>

                    </li>
                    <li>
                        <Link to="/LTMT" style={{textDecoration:'none', color:'black'}}>Lập trình máy tính</Link>

                    </li>
                    <li>
                        <Link to="/LTMT" style={{textDecoration:'none', color:'black'}}>Lập trình máy tính</Link>

                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ANM;
