// Exercise #6: Debugging (Object)
// ให้แก้ไข Error ที่เกิดจาก JavaScript โค้ดที่กำหนดให้

const student = {
  name: "John Doe",
  age: 18,
  grade: 12,
  subjects: ["Math", "Science", "History"],
};

console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Student Grade: " + student.gade);
console.log("Student Subjects: " + student.subjects);

// ผลลัพธ์ของโปรแกรมที่ถูกต้องจะต้องแสดงแบบนี้บนหน้าจอ Console
// 'Student Name: John Doe'
// 'Student Age: 18'
// 'Student Grade: 12'
// 'Student Subjects: Math,Science,History'