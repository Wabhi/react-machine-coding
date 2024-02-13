import React, { useState, useEffect } from "react";

const ShowDataInTable = () => {
  const [tableData, setTableData] = useState([]);
  const fetchTableData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      const sortedDataByName = result.sort((a, b) => a.name.localeCompare(b.name));
      setTableData(sortedDataByName);
    } catch (error) {
      console.log("There is an error fetching...", error);
    }
  };
  useEffect(() => {
    fetchTableData();
  }, []);
  console.log(tableData);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USER NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowDataInTable;
