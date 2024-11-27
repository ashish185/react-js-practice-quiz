interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const john: Employee = {
  name: "John",
  age: 28,
  salary: 50000,
};
