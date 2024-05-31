import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        registrationType: '',
        selectedSubject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Thêm logic để gửi formData đến Google Sheets hoặc backend service khác
    };

    return (
        <Container className="mt-5 card pt-2 pb-3" style={{backgroundColor:'#f27f24', color:'white'}}>
            <h2 className='fw-semibold text-center '>Form Đăng Ký Khóa Học</h2>
            <Form className="fw-bold" onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập họ và tên"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="registrationType">
                    <Form.Label>Đối tượng đăng ký</Form.Label>
                    <Form.Control
                        as="select"
                        name="registrationType"
                        value={formData.registrationType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn đối tượng đăng ký</option>
                        <option value="graduated_student">Học sinh tốt nghiệp</option>
                        <option value="grade_12_student">Lớp 12</option>
                        <option value="university_student">Sinh viên</option>
                        <option value="working_person">Người đi làm</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="selectedSubject">
                    <Form.Label>Chọn môn học</Form.Label>
                    <Form.Select
                        name="selectedSubject"
                        value={formData.selectedSubject}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn môn học</option>
                        <option value="network_security">An ninh mạng</option>
                        <option value="software_development">Phát triển phần mềm</option>
                        <option value="graphic_design">Thiết kế đồ hoạ</option>
                        <option value="ces">CES</option>
                        <option value="whs_cloud_foundation">WHS Cloud Foundation</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3 fw-semibold' style={{backgroundColor:'#9B3922', color:'white', border:'none'}}>
                    Đăng Ký
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationForm;
