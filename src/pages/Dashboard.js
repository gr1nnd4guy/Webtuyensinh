import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://sheet.best/api/sheets/b0fd887a-bd72-4263-b98e-16d1753bb388');
            const reversedData = response.data.reverse().slice(0, 10); // Đảo ngược và lấy 10 phần tử từ dưới lên
            setData(reversedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Vừa đăng ký</h1>
            
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Đối tượng đăng ký</th>
                        <th scope="col">Môn học</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fullName}</td>
                            <td>{item.registrationType}</td>
                            <td>{item.selectedSubject}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className=" mb-3" style={{backgroundColor:'white', borderStyle:'solid'}} onClick={handleRefresh}>Làm mới</button>
        </div>
    );
};

export default Dashboard;
