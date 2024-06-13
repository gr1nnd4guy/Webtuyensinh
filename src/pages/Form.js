import React, { useState, useEffect } from 'react';
import { gapi } from "gapi-script";

import 'bootstrap/dist/css/bootstrap.min.css';


const CLIENT_ID =
    "420580046683-frn4robcktpb5fujdvrjifp8nc08e0c0.apps.googleusercontent.com";
const API_KEY = "AIzaSyDpkfciU5DXNmasvI3KqUiQbRk7AP26uG0";
const SPREADSHEET_ID = "1sV6zLKlzV0tIS7VEpfLO_UvkJgTu6rOzmyTg68SZYc8";

function RegisForm() {

    const [data, setData] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        TypeStudent: "",
        Specialized: "",
    });

    useEffect(() => {
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4",
                    ],
                    scope:
                        "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
                })
                .then(
                    () => {
                        console.log("GAPI client loaded for API");
                    },
                    (error) => {
                        console.error("Error loading GAPI client for API", error);
                    }
                );
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1
            }-${currentDate.getDate()}`;
        const newData = { ...data, Date: formattedDate };
        await authenticate();
        await execute(newData);
    };

    const authenticate = async () => {
        gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(
                () => {
                    console.log("Sign-in successful");
                },
                (error) => {
                    console.error("Error signing in", error);
                }
            );
    };

    const execute = (newData) => {
        const spreedData = Object.values(newData);
        console.log(spreedData);
        gapi.client.sheets.spreadsheets.values
            .append({
                spreadsheetId: SPREADSHEET_ID,
                range: "Test!A:F",
                insertDataOption: "INSERT_ROWS",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [spreedData],
                },
            })
            .then(
                (response) => {
                    console.log("Response", response);
                },
                (error) => {
                    console.error("Execute error", error);
                }
            );
    };

    return (
      <div>
      <section className="">
        <div className="pt-4 pb-4 col-m-6 col-md">
          <div className="p-5 rounded shadow bg-white">
            <h3 className="text-center" style={{ fontSize: '4.0rem', color: '#F47E24' }}>ĐĂNG KÝ HỌC</h3>
            <h3 className="mb-5 text-center" style={{ fontSize: '1.5rem' }}>Hãy tham gia và trải nghiệm tại iSPACE</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
              <div className="mb-3 col-md-6">
                <input
                  type="text"
                  name="Name"
                  placeholder="Họ Tên Bạn *"
                  required
                  className="form-control"
                  style={{ height: '50px', fontSize: '1.5rem' }}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-md-6">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email *"
                  required
                  className="form-control"
                  style={{ height: '50px', fontSize: '1.5rem' }}
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="PhoneNumber"
                  placeholder="Số điện thoại *"
                  required
                  className="form-control"
                  style={{ height: '50px', fontSize: '1.5rem' }}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <select
                  name="TypeStudent"
                  required
                  className="form-control"
                  style={{ height: '50px', fontSize: '1.5rem' }}
                  onChange={handleChange}
                >
                  <option value="">-----Đối tượng-----</option>
                  <option value="HS đang học lớp 12 (đăng ký giữ chỗ)">
                    HS đang học lớp 12 (đăng ký giữ chỗ)
                  </option>
                  <option value="HS tốt nghiệp THPT/hoàn thành chương trình lớp 12">
                    HS tốt nghiệp THPT/hoàn thành chương trình lớp 12
                  </option>
                  <option value="Sinh Viên">Sinh Viên</option>
                  <option value="Người đi làm">Người đi làm</option>
                </select>
              </div>
              <div className="mb-3">
                <select
                  name="Specialized"
                  required
                  className="form-control"
                  style={{ height: '50px', fontSize: '1.5rem' }}
                  onChange={handleChange}
                >
                  <option value="">----- Chương trình học -----</option>
                  <option value="An ninh mạng">An ninh mạng</option>
                  <option value="Phát triển phần mềm">Phát triển phần mềm</option>
                  <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                  <option value="Quản trị mạng">Quản trị mạng</option>
                  <option value="Thương mại điện tử">Thương mại điện tử</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ height: '50px', fontSize: '1.5rem' }}
              >
                GỬI NGAY
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    );
}

export default RegisForm;
