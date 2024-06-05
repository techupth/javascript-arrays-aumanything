const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];
// Exercise #5: Removing the Value out of the Array

// จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด
// ลบ Object ของพนักงานที่ชื่อ “Kody” ใน updateEmployees
// เมื่อลบข้อมูลเสร็จแล้วให้ console.log ดูค่าของ employees

// คำใบ้ 🕵🏼‍♀️

// จำได้ไหมว่าเราต้องใช้คำสั่งอะไรในการลบ Value ออกจาก Array ถ้าจำไม่ได้ตรงนี้ให้ลองค้นหาข้อมูลดูนะ 😉
// Start coding here
employees.pop();
console.log(employees);