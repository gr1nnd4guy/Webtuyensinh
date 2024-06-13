import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GoogleSheetInfo } from "./gg-info";

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admin = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [courseCounts, setCourseCounts] = useState({});

  useEffect(() => {
    const initClient = () => {
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            apiKey: GoogleSheetInfo.apiKey,
            clientId: GoogleSheetInfo.clientId,
            scope: GoogleSheetInfo.scope,
            discoveryDocs: GoogleSheetInfo.discoveryDocs,
          })
          .then(() => {
            fetchData();
          });
      });
    };

    initClient();
  }, []);

  useEffect(() => {
    const lowercasedSearch = search.toLowerCase();
    const filtered = data.filter((row) => {
      const [name, email, phone, type, department] = row;
      return (
        (name && name.toLowerCase().includes(lowercasedSearch)) ||
        (email && email.toLowerCase().includes(lowercasedSearch)) ||
        (phone && phone.toLowerCase().includes(lowercasedSearch)) ||
        (type && type.toLowerCase().includes(lowercasedSearch)) ||
        (department && department.toLowerCase().includes(lowercasedSearch))
      );
    });
    setFilteredData(filtered);
    calculateCourseCounts(filtered);
  }, [search, data]);

  useEffect(() => {
    setCurrentPage(1); // Reset current page when filtered data changes
  }, [filteredData]);

  const fetchData = async () => {
    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: GoogleSheetInfo.spreadsheetId,
        range: "Test!A:F",
      });
      setData(response.result.values || []);
      setFilteredData(response.result.values || []);
      calculateCourseCounts(response.result.values || []);
    } catch (error) {
      console.error("Error fetching data from spreadsheet:", error);
    }
  };

  const calculateCourseCounts = (data) => {
    const counts = data.reduce((acc, row) => {
      const course = row[4]; // Assuming ngành học is at index 4
      if (course) {
        acc[course] = acc[course] ? acc[course] + 1 : 1;
      }
      return acc;
    }, {});
    setCourseCounts(counts);
  };

  const handleDelete = async (index) => {
    try {
      // Lấy ra ID của hàng dữ liệu cần xoá
      const rowIdToDelete = filteredData[index][3]; // Giả sử ID hàng dữ liệu được lưu ở cột thứ 7 (index 6)

      // Nếu không có ID, có thể xảy ra lỗi hoặc dữ liệu không được cập nhật đúng cách
      if (!rowIdToDelete) {
        console.error("Không thể xác định ID của hàng dữ liệu");
        return;
      }

      // Xoá hàng dữ liệu từ Google Sheets bằng cách sử dụng ID
      await gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: GoogleSheetInfo.spreadsheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId: GoogleSheetInfo.sheetId, // ID của sheet chứa dữ liệu
                  dimension: "ROWS",
                  startIndex: index, // Bắt đầu từ hàng thứ index
                  endIndex: index + 1, // Kết thúc ở hàng sau đó
                },
              },
            },
          ],
        },
      });

      // Xoá hàng dữ liệu trong dữ liệu state của ứng dụng
      const updatedData = [...filteredData];
      updatedData.splice(index, 1);
      setFilteredData(updatedData);
      calculateCourseCounts(updatedData);
    } catch (error) {
      console.error("Error deleting data from spreadsheet:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const chartData = {
    labels: Object.keys(courseCounts),
    datasets: [
      {
        label: 'Course Counts',
        data: Object.values(courseCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Search by Tên, Email, SĐT và Loại"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ height: "50px" }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="text-center mb-4 text-uppercase">
              Danh sách đăng ký học
            </h1>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Ngành</th>
                    <th scope="col">Ngày</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((row, index) => (
                    <tr key={index}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>{row[4]}</td>
                      <td>{row[5]}</td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <button
                          className="btn btn-danger fw-semibold"
                          onClick={() => handleDelete(indexOfFirstItem + index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredData.length > itemsPerPage && (
              <nav>
                <ul className="pagination justify-content-center">
                  {Array.from({
                    length: Math.ceil(filteredData.length / itemsPerPage),
                  }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <Bar data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
