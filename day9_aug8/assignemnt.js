// const products = [
//   {
//     id: 1,

//     name: "Laptop",

//     category: "Electronics",
//     price: 75000,
//     stock: 10,
//     rating: 4.5,
//   },

//   {
//     id: 2,

//     name: "Smartphone",

//     category: "Electronics",

//     price: 40000,

//     stock: 0,

//     rating: 4.2,
//   },

//   {
//     id: 3,

//     name: "Book",

//     category: "Education",

//     price: 500,

//     stock: 100,

//     rating: 4.9,
//   },

//   {
//     id: 4,

//     name: "Desk Chair",

//     category: "Furniture",

//     price: 3500,

//     stock: 25,

//     rating: 4.0,
//   },
// ];

// // find the most expensive product

// let expensive = products.reduce((max, product) => {
//   if (product.price > max) {
//     return product.price;
//   } else {
//     return max;
//   }
// }, 0);

// console.log(expensive);

// // find all the data before their expiring date

// const medicines = [
//   {
//     id: 1,

//     name: "Paracetamol",

//     type: "Tablet",

//     price: 20,

//     stock: 50,

//     expiryDate: "2026-12-31",
//   },

//   {
//     id: 2,

//     name: "Cough Syrup",

//     type: "Syrup",

//     price: 60,

//     stock: 0,

//     expiryDate: "2025-06-30",
//   },

//   {
//     id: 3,

//     name: "Ibuprofen",

//     type: "Tablet",

//     price: 25,

//     stock: 100,

//     expiryDate: "2024-11-15",
//   },

//   {
//     id: 4,

//     name: "Antacid",

//     type: "Tablet",

//     price: 10,

//     stock: 200,

//     expiryDate: "2027-01-01",
//   },
// ];

// // Find medicines that are expiring before a specific date (e.g., 2025-12-31)

// let targetDate = new Date("2026-05-06");

// // for (i = 0; i < medicines.length; i++) {
// //   let expiry = new Date(medicines[i].expiryDate);
// // }

// let all = medicines.filter((med) => {
//   return targetDate > new Date(med.expiryDate);
// });
// console.log(all);

const students = [
  {
    id: 1,

    name: "Alice",

    age: 20,

    grade: "A",

    marks: 85,

    enrolled: true,
  },

  {
    id: 2,

    name: "Bob",

    age: 22,

    grade: "B",

    marks: 70,

    enrolled: false,
  },

  {
    id: 3,

    name: "Charlie",

    age: 19,

    grade: "A",

    marks: 90,

    enrolled: true,
  },

  {
    id: 4,

    name: "David",

    age: 21,

    grade: "C",

    marks: 60,

    enrolled: true,
  },

  {
    id: 5,

    name: "Eva",

    age: 20,

    grade: "B",

    marks: 75,

    enrolled: false,
  },
];

// let res = students.filter((student) => {
//   return student.grade == "A";
// });
// console.log(res);

// let res1 = students.reduce((acc, curr)=>{
//     if curr.grade.
// },{})

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 190,
    change: -1.2,
    volume: 1500000,
  },

  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2700,
    change: +12.5,
    volume: 800000,
  },

  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 700,
    change: +5.0,
    volume: 2000000,
  },

  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3300,
    change: -8.3,
    volume: 600000,
  },

  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 310,
    change: +2.0,
    volume: 1000000,
  },
];

// separate the data into 2 sets negitive and psotive

const ans = stocks.reduce(
  (acc, curr) => {
    if (curr.change > 0) {
      acc[0].push(curr);
    } else {
      acc[1].push(curr);
    }
    return acc;
  },

  [[],[]]
);

console.log(ans);
