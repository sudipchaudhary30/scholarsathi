import React from 'react';
import { database } from '../firebase';
import { ref, set } from 'firebase/database';

const TestWrite = () => {
  const writeData = () => {
    set(ref(database, 'students/stu1'), {
      name: "Sita",
      age: 21,
      gender: "Female",
      educationLevel: "Bachelor",
      interestedCourse: "BCA",
      scholarshipPoints: 85
    });

    set(ref(database, 'students/stu2'), {
      name: "Ram",
      age: 25,
      gender: "Male",
      educationLevel: "Bachelor",
      interestedCourse: "BBA",
      scholarshipPoints: 75
    });
  };

  return (
    <div>
      <h2>Test Firebase Write</h2>
      <button onClick={writeData}>Write Sample Data</button>
    </div>
  );
};

export default TestWrite;
