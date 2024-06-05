// Exercise #7: Manipulating the Order Array (Optional)

// กำหนดให้orders เป็น Array ที่บรรจุ Object ที่แสดงรายการคำสั่งซื้อ

// Object จะมี Property ดังนี้

// Key id เก็บข้อมูลลำดับของรายการ มีชนิดข้อมูลเป็น Number
// Key customerName เก็บข้อมูลชื่อของลูกค้า มีชนิดข้อมูลเป็น String
// Key productName เก็บข้อมูลชื่อของสินค้าที่ซื้อ มีชนิดข้อมูลเป็น String
// Key productPrice เก็บข้อมูลราคาสินค้าต่อชิ้น มีชนิดข้อมูลเป็น Number
// Key productQuantity เก็บจำนวนของสินค้าที่ซื้อ มีชนิดข้อมูลเป็น Number
// Key creditCardType เก็บประเภทของเครดิตการ์ด มีชนิดข้อมูลเป็น String
// กำหนดให้มีโค้ดตั้งต้นดังนี้

let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
let isArray = Array.isArray(orders);
console.log(isArray);
let creditCardTypeOfBlindermann = orders[2].creditCardType;
creditCardTypeOfBlindermann = "visa";
console.log(creditCardTypeOfBlindermann);
let productQuantityOfJoannet = orders[3].productQuantity;
let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;
console.log(totalPurchaseOfDary);
orders.shift();
console.log(orders);