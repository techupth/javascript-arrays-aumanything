// Exercise #3: Updating the Values on the Object in the Array

// จากโค้ดใน Exercise #2 ให้เขียนโค้ดตามโจทย์ที่กำหนด

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
];

// Start coding here
// ให้เพิ่ม "Watching basketball" เข้าไปใน Value ของ Key hobbies ของพนักงานที่ชื่อ Alex
// จากนั้นให้ console.log Object ลำดับที่ 2 ของ Array employees แล้วสังเกต Key hobbies ของ Object

// คำใบ้ 🕵🏼‍♀️
// จำได้ไหมว่าเราต้องใช้คำสั่งอะไรในการเพิ่ม Value เข้าไปใน Array ถ้าจำไม่ได้ตรงนี้ให้ลองค้นหาข้อมูลดูนะ 😉
employees[1].hobbies.push("Watching basketball");
console.log(employees[1]);
