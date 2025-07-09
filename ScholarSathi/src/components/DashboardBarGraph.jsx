

import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import {
  BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

const DashboardBarGraph = () => {
  const [students, setStudents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Filters
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    const studentRef = ref(database, "students");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.values(data).map((stu) => ({
          name: stu.name,
          age: stu.age,
          gender: stu.gender,
          course: stu.interestedCourse,
          scholarshipPoints: stu.scholarshipPoints,
        }));
        setStudents(formatted);
        setFilteredData(formatted); // default = all
      }
    });
  }, []);

  // Update filtered data
  const handleFilter = (type) => {
    setFilterType(type);

    let updated = [...students];

    if (type === "Male" || type === "Female") {
      updated = students.filter((s) => s.gender === type);
    } else if (type === "17-20") {
      updated = students.filter((s) => s.age >= 17 && s.age <= 20);
    } else if (type === "21-24") {
      updated = students.filter((s) => s.age >= 21 && s.age <= 24);
    } else if (type === "25-30") {
      updated = students.filter((s) => s.age >= 25 && s.age <= 30);
    } else if (type === "30+") {
      updated = students.filter((s) => s.age > 30);
    } else if (type !== "All") {
      updated = students.filter((s) => s.course === type);
    }

    setFilteredData(updated);
  };




  const pieData = [
  {
    name: "Male",
    value: filteredData.filter((s) => s.gender === "Male").length,
  },
  {
    name: "Female",
    value: filteredData.filter((s) => s.gender === "Female").length,
  },
];


  // Unique courses
  const courses = [...new Set(students.map((s) => s.course))];

  return (
    <div style={{ marginTop: "30px", color: "white" }}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="filter" style={{ marginRight: "10px" }}>Filter By:</label>
        <select
          id="filter"
          onChange={(e) => handleFilter(e.target.value)}
          value={filterType}
        >
          <option value="All">All</option>
          <option value="Male">Gender: Male</option>
          <option value="Female">Gender: Female</option>
          <option value="17-20">Age: 17-20</option>
          <option value="21-24">Age: 21-24</option>
          <option value="25-30">Age: 25-30</option>
          <option value="30+">Age: 30+</option>
          {courses.map((c) => (
            <option key={c} value={c}>
              Course: {c}
            </option>
          ))}
        </select>
      </div>

      {/* Top Row: Pie + Box */}
      <div style={{ display: "flex", gap: "30px", marginBottom: "40px" }}>
        {/* Pie Chart */}
        <div style={{ width: "50%", height: 300 }}>
          <h3>Gender Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Detail Box */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "12px",
            flex: 1,
            height: 300,
          }}
        >
          <h3>Recent Entries</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {filteredData.slice(-5).reverse().map((stu, idx) => (
              <li key={idx}>
                👤 {stu.name} | {stu.age} yrs | {stu.gender} | {stu.course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row: Line + Bar */}
      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ width: "50%", height: 300 }}>
          <h3>Scholarship Points (Line Chart)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="scholarshipPoints" stroke="#00ccff" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: "50%", height: 300 }}>
          <h3>Age (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="age" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardBarGraph;





