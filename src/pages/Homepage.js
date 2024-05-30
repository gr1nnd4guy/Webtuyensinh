import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import banner from '../pages/imgs/banner.jpg';

function Home() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',  // Căn giữa theo chiều ngang
        alignItems: 'center',      // Căn giữa theo chiều dọc
        background:'#c97712'          
      };
    
      const imageStyle = {
        maxWidth: '50%',
        maxHeight: '50%',
      };

      const textStyle = {
        color: 'white',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: 'bold',
        
      };
      
    
    return (
        <div style={{
            background: 'white'
          }}>
            <section className="">
            <img src={banner} alt="course" className="img-fluid pt-2 rounded img-thumbnail" width="100%"/>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-md text-center heading-container">NHỮNG CHƯƠNG TRÌNH ĐÀO TẠO</div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-2 pt-5 ">
                            <div className="card " style={containerStyle} /*style={{background:'radial-gradient(circle, rgba(78,205,196,1) 0%, rgba(242,127,36,1) 100%',}}*/>
                                <img src="https://ispace.edu.vn/wp-content/uploads/2021/03/ANM_3.png" alt="course" className="card-img-top pt-2 rounded " style={imageStyle}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={textStyle}>An ninh mạng</h5>
                                    <p className="card-text" style={textStyle}>Học ngành An ninh mạng tại iSpace</p>
                                    <button>
                                    <Link to="/ANM" className="button_top" style={{background:'white'}}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 pt-5 pr-5">
                            <div className="card " style={containerStyle} /*style={{background:'radial-gradient(circle, rgba(78,205,196,1) 0%, rgba(242,127,36,1) 100%',}}*/>
                                <img src="https://ispace.edu.vn/wp-content/uploads/2021/03/PTPM_3.png" alt="course" className="card-img-top pt-2 rounded " style={imageStyle}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={textStyle}>Phát triển phần mềm</h5>
                                    <p className="card-text" style={textStyle}>Học ngành Phát triển phần mềm tại iSpace</p>
                                    <button>
                                    <Link to="/LTMT" className="button_top" style={{background:'white'}}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 pt-5 pr-5">
                            <div className="card " style={containerStyle} /*style={{background:'radial-gradient(circle, rgba(78,205,196,1) 0%, rgba(242,127,36,1) 100%',}}*/>
                                <img src="https://ispace.edu.vn/wp-content/uploads/2021/03/TKDH_3.png" alt="course" className="card-img-top pt-2 rounded " style={imageStyle}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={textStyle}>Thiết kế đồ hoạ</h5>
                                    <p className="card-text" style={textStyle}>Học ngành Thiết kế đồ hoạ tại iSpace</p>
                                    <button>
                                    <Link to="/TKDH" className="button_top" style={{background:'white'}}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 pt-5 pr-5">
                            <div className="card " style={containerStyle} /*style={{background:'radial-gradient(circle, rgba(78,205,196,1) 0%, rgba(242,127,36,1) 100%',}}*/>
                                <img src="https://ispace.edu.vn/wp-content/uploads/2024/02/1-1.png" alt="course" className="card-img-top pt-2 rounded " style={imageStyle}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={textStyle}>Thiết kế đồ hoạ</h5>
                                    <p className="card-text" style={textStyle}>Học ngành Thiết kế đồ hoạ tại iSpace</p>
                                    <button>
                                    <Link to="/TKDH" className="button_top" style={{background:'white'}}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 pt-5 pr-5">
                            <div className="card " style={containerStyle} /*style={{background:'radial-gradient(circle, rgba(78,205,196,1) 0%, rgba(242,127,36,1) 100%',}}*/>
                                <img src="https://ispace.edu.vn/wp-content/uploads/2024/02/2.png" alt="course" className="card-img-top pt-2 rounded " style={imageStyle}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={textStyle}>Thiết kế đồ hoạ</h5>
                                    <p className="card-text" style={textStyle}>Học ngành Thiết kế đồ hoạ tại iSpace</p>
                                    <button>
                                    <Link to="/TKDH" className="button_top" style={{background:'white'}}>Xem chi tiết</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center pt-5">
                        <div className="col-md text-center heading-container">HÃY ĐĂNG KÝ ĐỂ NHẬN THÊM THÔNG BÁO TUYỂN SINH</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;