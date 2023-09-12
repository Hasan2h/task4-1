function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }
  
  let arr = [
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
    randomNumbers(1, 100),
  ];
  let sumEven = 0,
    sum5 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    }
    if (i < 5) {
      sum5 += arr[i];
    }
  }
  
  let obj = {
    name: "Hasan",
    age: 30,
    phone: "09999999999",
    email: "enhasanalhasan@gmail.com",
  };
  
  let c = `<h1>Part 1</h1>
  <p>sum of even numbers is : ${sumEven}</p>
  <p>sum of 5 numbers is : ${sum5}</p>
  <h1>Part 2</h1>
  <p>Print Object : ${obj}</p>
  <p>Print Obj Name : ${obj.name}</p>
  <p>Print Obj Age : ${obj.age}</p>
  <p>Print Obj phone : ${obj.phone}</p>
  <p>Print Obj Email : ${obj.email}</p>
  `;
  document.write(c);