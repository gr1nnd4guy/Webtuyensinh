import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({});
    const mutation = useMutation(formData =>
        axios.post('https://sheet.best/api/sheets/b0fd887a-bd72-4263-b98e-16d1753bb388', formData)
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Container className="mt-5 card pt-2 pb-3" style={{ backgroundColor: '#f27f24', color: 'white' }}>
            <h2 className='fw-light text-start '>5 SUẤT ƯU ĐÃI HỌC PHÍ 50%</h2>
            <h2 className='fw-semibold text-start '>Đăng ký xét tuyển ngay</h2>
            <Form className="fw-bold" onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập họ và tên"
                        name="fullName"
                        value={formData.fullName || ''}
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
                        value={formData.email || ''}
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
                        value={formData.phone || ''}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="registrationType">
                    <Form.Label>Đối tượng đăng ký</Form.Label>
                    <Form.Control
                        as="select"
                        name="registrationType"
                        value={formData.registrationType || ''}
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
                    <Form.Control
                        as="select"
                        name="selectedSubject"
                        value={formData.selectedSubject || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Chọn môn học</option>
                        <option value="network_security">An ninh mạng</option>
                        <option value="software_development">Phát triển phần mềm</option>
                        <option value="graphic_design">Thiết kế đồ hoạ</option>
                        <option value="ces">CES</option>
                        <option value="whs_cloud_foundation">WHS Cloud Foundation</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3 fw-semibold' style={{ backgroundColor: '#9B3922', color: 'white', border: 'none' }} disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Đang gửi...' : 'Đăng Ký'}
                </Button>
                {mutation.isError && <div style={{ color: 'red', marginTop: '10px' }}>Có lỗi xảy ra khi gửi dữ liệu. Vui lòng thử lại sau.</div>}
            </Form>
        </Container>
    );
};

export default RegistrationForm;
