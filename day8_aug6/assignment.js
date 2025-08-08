// let employees = [
//     { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
//     { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
//     { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
//     { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
// 	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
//   ];

//  1.⁠ ⁠declare array of employees & sort them in ascending order (empId)

//  2.⁠ ⁠declare array of employees & sort them in ascending order by name.

//  3.⁠ ⁠declare array of employees & filter the employees whose sal>6000;

//  4.⁠ ⁠declare array of employees & increase sal of every employee by 500;

//  5.⁠ ⁠declare array of employees & add "comp:ibm" to every employee;

//  6.⁠ ⁠convert array of letters to array of words
// 		const inputArr = [
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

//  7.⁠ ⁠add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

//  8.⁠ ⁠declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

//  9.⁠ ⁠intersection of 2 number arrays

// 10.⁠ ⁠WAP to print the occurance of each elements
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

// 1.⁠ ⁠declare array of employees & sort them in ascending order (empId)

let employees = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "geeta", sal: 8000, gender: "female" },
  { eId: 103, name: "sameer", sal: 7000, gender: "male" },
  { eId: 102, name: "sita", sal: 9000, gender: "female" },
  { eId: 105, name: "deepak", sal: 8000, gender: "male" },
];

console.log(employees.sort((a, b) => a.eId - b.eId));

// 2.⁠ ⁠declare array of employees & sort them in ascending order by name.

console.log(employees.sort((a, b) => a.name.localeCompare(b.name)));

// 3.⁠ ⁠declare array of employees & filter the employees whose sal>6000;

console.log(employees.filter((a) => a.sal > 6000));

// 4.⁠ ⁠declare array of employees & increase sal of every employee by 500;

employees = employees.map((emp) => {
  return { ...emp, sal: emp.sal + 500 };
});
console.log(employees);

// 5.⁠ ⁠declare array of employees & add "comp:ibm" to every employee;

let employees2 = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "geeta", sal: 8000, gender: "female" },
  { eId: 103, name: "sameer", sal: 7000, gender: "male" },
  { eId: 102, name: "sita", sal: 9000, gender: "female" },
  { eId: 105, name: "deepak", sal: 8000, gender: "male" },
];

employees2 = employees2.map((emp) => {
  return { ...emp, comp: "ibm" };
});
console.log(employees2);

//  6.⁠ ⁠convert array of letters to array of words
// 		const inputArr = [
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [
  "b",
  "a",
  "k",
  "e",
  "",
  "c",
  "a",
  "k",
  "e",
  "",
  "e",
  "a",
  "t",
  "",
  "a",
  "b",
  "c",
];

let res = [];
x = "";
for (i of inputArr) {
  if (i == "") {
    res.push(x);
    x = "";
  } else {
    x = x + i;
  }
}
res.push(x);
console.log(res);

const res1 = inputArr.reduce(
  (acc, curr) => {
    if (curr === "") {
      acc.push("");
    } else {
      acc[acc.length - 1] += curr;
    }
    return acc;
  },
  [""]
);
console.log(res1);

// 7.⁠ ⁠add Dept info for each employee
employees = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" },
];
departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" },
];

employees = employees.map((emp) => {
  const deptInfo = departments.find((d) => d.eId === emp.eId);
  return { ...emp, dept: deptInfo ? deptInfo.dept : "Unknown" };
});

employees = employees.map((emp) => {
  const dept1 = departments.find((d) => d.eId === emp.eId);
  return { ...emp, dept: dept1 ? dept1.dept : "Unknown" };
});

console.log(employees);

//  8.⁠ ⁠declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}
