import React from "react";
import { useContext } from "react";
import "./style.css";
import banner from "../pages/imgs/bn-anm.jpg";
import RegistrationForm from "./Form";
import { DarkModeContext } from "./DarkModeContext";
function ANM() {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const textheadStyle = {
    color: "#f27f24",
    fontSize: "40px",
    
  };
  const textpStyle = {
    color: "#f27f24",
    fontSize: "19px",
    
  };

  return (
    <div style={{ background: isDarkMode ? '#242526' : 'white' }}>
      <nav className="navbar row">
                <button className="dark-mode-toggle col-m" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </nav>
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
                <div className="mt-5 mb-5  card col-md-auto border-0" style={{background:'white',}}>
                    <div className="mb-3 ms-3 me-3">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" alt="course" className="card-img-top pt-2 rounded " style={{width:'100%'}}/>
                    </div>
                </div>
                </div>
        </div>
      </section>
      <section className="pb-5" style={{ background: isDarkMode ? '#242526' : 'white' }}>
        <div className="container" >
          <div className="row pt-4 ">
            <div
              className="col-md text-center fw-semibold "
              style={textheadStyle}
            >
              Form đăng ký
            </div>
          </div>
          <div className="row pt-1" >
            <div className="col-md-6 col-m">
            <RegistrationForm/>
            </div>
            <div className="col-6 mt-5">
            <img
          src={"https://img.freepik.com/free-vector/flat-safer-internet-day-background_23-2151163157.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user"}
          alt="course"
          className="img-fluid pt-2 rounded img-thumbnail"
          width="100%"
        />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ANM;
