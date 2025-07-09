// import React from 'react';
// import {
//   BarChart, Bar,
//   LineChart, Line,
//   XAxis, YAxis, CartesianGrid,
//   Tooltip, ResponsiveContainer, Legend
// } from 'recharts';

// const data = [
//   { name: 'Mascots', value: 12 },
//   { name: 'Students', value: 145 },
//   { name: 'Scholarships', value: 8 },
//   { name: 'Events', value: 3 },
// ];

// const DashboardGraphs = () => {
//   return (
//     <div className="graph-wrapper">
//       {/* Bar Graph */}
//       <div className="graph-card">
//         <h3 style={{ color: 'white', marginBottom: '10px' }}>Bar Graph</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#555" />
//             <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 13 }} />
//             <YAxis stroke="#ffffff" tick={{ fontSize: 13 }} allowDecimals={false} />
//             <Tooltip contentStyle={{ backgroundColor: '#222', color: '#fff', border: 'none' }} />
//             <Legend wrapperStyle={{ color: '#ffffff' }} />
//             <Bar dataKey="value" fill="#3b82f6" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Line Graph */}
//       <div className="graph-card">
//         <h3 style={{ color: 'white', marginBottom: '10px' }}>Line Graph</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#555" />
//             <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 13 }} />
//             <YAxis stroke="#ffffff" tick={{ fontSize: 13 }} allowDecimals={false} />
//             <Tooltip contentStyle={{ backgroundColor: '#222', color: '#fff', border: 'none' }} />
//             <Legend wrapperStyle={{ color: '#ffffff' }} />
//             <Line type="monotone" dataKey="value" stroke="#eab308" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default DashboardGraphs;


// import React, { useState } from 'react';
// import {
//   PieChart, Pie, Cell,
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';

// const graphData = {
//   age: [
//     { group: '17-20', value: 30 },
//     { group: '21-24', value: 45 },
//     { group: '25-30', value: 20 },
//     { group: '30+', value: 10 }
//   ],
//   gender: [
//     { group: 'Male', value: 70 },
//     { group: 'Female', value: 35 }
//   ],
//   course: [
//     { group: 'BSc.CSIT', value: 40 },
//     { group: 'AI', value: 25 },
//     { group: 'Hacking', value: 15 },
//     { group: 'ML', value: 20 },
//     { group: 'SE', value: 5 }
//   ]
// };

// const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

// const DashboardGraphs = () => {
//   const [selected, setSelected] = useState('age');
//   const data = graphData[selected];

//   return (
//     <div style={{ padding: '20px', color: 'white' }}>
//       <h2 style={{ color: 'white', marginBottom: '10px' }}>Demographics Dashboard</h2>
      
//       <select
//         value={selected}
//         onChange={(e) => setSelected(e.target.value)}
//         style={{
//           padding: '8px 12px',
//           borderRadius: '6px',
//           marginBottom: '20px',
//           outline: 'none'
//         }}
//       >
//         <option value="age">Age</option>
//         <option value="gender">Gender</option>
//         <option value="course">Course</option>
//       </select>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
//         {/* Pie Chart */}
//         <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
//           <h4 style={{ marginBottom: '10px' }}>Pie Chart</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 nameKey="group"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 fill="#8884d8"
//                 label={{ fill: 'white' }}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend wrapperStyle={{ color: 'white' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart */}
//         <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
//           <h4 style={{ marginBottom: '10px' }}>Bar Chart</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={data}>
//               <XAxis dataKey="group" stroke="#fff" />
//               <YAxis stroke="#fff" allowDecimals={false} />
//               <Tooltip contentStyle={{ backgroundColor: '#222', color: '#fff' }} />
//               <Legend wrapperStyle={{ color: '#fff' }} />
//               <Bar dataKey="value" fill="#3b82f6" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardGraphs;


// import React, { useState } from 'react';
// import {
//   PieChart, Pie, Cell, Tooltip, LineChart, Line, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer
// } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const sampleData = [
//   { name: 'John', age: 20, gender: 'Male', education: 'Bachelor', course: 'AI', discount: 30 },
//   { name: 'Sara', age: 22, gender: 'Female', education: 'Bachelor', course: 'ML', discount: 40 },
//   { name: 'Tom', age: 25, gender: 'Male', education: 'Master', course: 'Cyber', discount: 20 },
//   { name: 'Anna', age: 19, gender: 'Female', education: 'High School', course: 'Data Science', discount: 50 },
// ];

// Utility to count grouped values
// const getPieData = (key) => {
//   const counts = {};
//   sampleData.forEach((item) => {
//     const val = item[key];
//     counts[val] = counts[val] ? counts[val] + 1 : 1;
//   });
//   return Object.keys(counts).map((k) => ({ name: k, value: counts[k] }));
// };

// const DashboardGraphs = () => {
//   const [filter, setFilter] = useState('gender');
//   const pieData = getPieData(filter);

//   return (
//     <div className="graph-section">
//       {/* Top Section */}
//       <div className="top-section">
//         <div className="left-graph">
//           <h3>Distribution by {filter.charAt(0).toUpperCase() + filter.slice(1)}</h3>
//           <select onChange={(e) => setFilter(e.target.value)}>
//             <option value="gender">Gender</option>
//             <option value="age">Age</option>
//             <option value="education">Education</option>
//             <option value="course">Course</option>
//           </select>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="info-box">
//           <h3>Recent Info</h3>
//           <ul>
//             {sampleData.map((item, idx) => (
//               <li key={idx}>
//                 <strong>{item.name}</strong> — {item.age} yrs, {item.gender}, {item.course}, {item.discount}%
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bottom-graphs">
//         <div className="graph-box">
//           <h4>Scholarship Discount (Bar Chart)</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={sampleData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="discount" fill="#00C49F" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="graph-box">
//           <h4>Scholarship Discount (Line Chart)</h4>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={sampleData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="discount" stroke="#FF8042" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardGraphs;


// import React, { useEffect, useState } from 'react';
// import { ref, onValue } from 'firebase/database';
// import { database } from '../firebase';

// const DashboardGraph = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const studentRef = ref(database, 'students');
//     onValue(studentRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const formatted = Object.values(data);
//         setStudents(formatted);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Student Data:</h2>
//       {students.map((stu, index) => (
//         <p key={index}>{stu.name} - {stu.gender} - {stu.scholarshipPoints}</p>
//       ))}
//     </div>
//   );
// };

// export default DashboardGraph;



// DashboardBarGraph.jsx
// import React, { useEffect, useState } from 'react';
// import { database } from '../firebase'; // adjust path if needed
// import { ref, onValue } from 'firebase/database';

// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';

// const DashboardBarGraph = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const studentsRef = ref(database, 'students');
//     onValue(studentsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const processed = Object.values(data).map((student) => ({
//           name: student.name,
//           scholarshipPoints: student.scholarshipPoints,
//         }));
//         setChartData(processed);
//       }
//     });
//   }, []);

//   return (
//     <div style={{ width: '100%', height: 400 }}>
//       <h3 style={{ color: 'white' }}>Scholarship Points by Student</h3>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="scholarshipPoints" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default DashboardBarGraph;


// import React, { useEffect, useState } from "react";
// import { database } from "../firebase"; // your Firebase config
// import { ref, onValue } from "firebase/database";

// import {
//   BarChart, Bar, LineChart, Line,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";

// const DashboardBarGraph = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const studentRef = ref(database, "students");
//     onValue(studentRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const formatted = Object.values(data).map((stu) => ({
//           name: stu.name,
//           age: stu.age,
//           scholarshipPoints: stu.scholarshipPoints
//         }));
//         setStudents(formatted);
//       }
//     });
//   }, []);

//   return (
//     <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
//       <div style={{ width: "50%", height: 300 }}>
//         <h3 style={{ color: "white", marginBottom: "10px" }}>Bar Chart: Age</h3>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={students}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="age" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <div style={{ width: "50%", height: 300 }}>
//         <h3 style={{ color: "white", marginBottom: "10px" }}>Line Chart: Scholarship Points</h3>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={students}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="scholarshipPoints" stroke="#8884d8" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default DashboardBarGraph;




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

  // Pie chart data (gender distribution)
  // const pieData = [
  //   {
  //     name: "Male",
  //     value: students.filter((s) => s.gender === "Male").length,
  //   },
  //   {
  //     name: "Female",
  //     value: students.filter((s) => s.gender === "Female").length,
  //   },
  // ];


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





