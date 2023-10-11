function Student(name, number) {
  this.name = name;
  this.number = number;
}

let list = ["이유안", "방승희", "최성민"];
let studentArr = [];

for(let i=0; i<list.length; i++) {
  studentArr[i] = new student(list[i], i+1);
}
console.log(studentArr);