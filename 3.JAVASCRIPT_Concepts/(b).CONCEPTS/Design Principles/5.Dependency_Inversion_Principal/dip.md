### **Dependency Inversion Principle (DIP) with Person, Student, and Accountant**  

The **Dependency Inversion Principle (DIP)** states that:  
1. **High-level modules** (like `Person`) should not depend on **low-level modules** (like `Student` or `Accountant`).  
2. Both should depend on **abstractions (interfaces)** instead of concrete classes.  

---

## 🚨 **Bad Practice (Violating DIP)**  
Here, `Person` directly depends on concrete classes (`Student`, `Accountant`).  

```js
class Student {
  getRoleDetails() {
    return "I am a Student, studying.";
  }
}

class Accountant {
  getRoleDetails() {
    return "I am an Accountant, managing finances.";
  }
}

class Person {
  constructor(role) {
    this.role = role; // Directly dependent on concrete classes
  }

  showRole() {
    console.log(this.role.getRoleDetails());
  }
}

const student = new Student();
const accountant = new Accountant();

const person1 = new Person(student);
person1.showRole(); // I am a Student, studying.

const person2 = new Person(accountant);
person2.showRole(); // I am an Accountant, managing finances.

// 🔴 Problem: If we add a new role (e.g., "Teacher"), we must modify Person.
```

### ❌ **Problems**:
- `Person` is tightly coupled with `Student` and `Accountant`, violating DIP.  
- Adding a new role (e.g., `Teacher`) requires modifying `Person`.  
- **High-level module (`Person`) should depend on an abstraction, not concrete classes.**

---

## ✅ **Good Practice (Following DIP)**
We introduce an **abstraction (interface using JavaScript classes or objects)** so that `Person` depends on **an interface**, not concrete implementations.

```js
// Abstract class / Interface (acts as a contract)
class Role {
  getRoleDetails() {
    throw new Error("getRoleDetails() must be implemented.");
  }
}

// Concrete classes implementing the abstraction
class Student extends Role {
  getRoleDetails() {
    return "I am a Student, studying.";
  }
}

class Accountant extends Role {
  getRoleDetails() {
    return "I am an Accountant, managing finances.";
  }
}

// Adding a new role without modifying Person
class Teacher extends Role {
  getRoleDetails() {
    return "I am a Teacher, educating students.";
  }
}

// High-level module (Person) depends on abstraction (Role)
class Person {
  constructor(role) {
    if (!(role instanceof Role)) {
      throw new Error("role must be an instance of Role");
    }
    this.role = role;
  }

  showRole() {
    console.log(this.role.getRoleDetails());
  }
}

// Now, Person can work with any role without modification!
const student = new Person(new Student());
student.showRole(); // I am a Student, studying.

const accountant = new Person(new Accountant());
accountant.showRole(); // I am an Accountant, managing finances.

const teacher = new Person(new Teacher());
teacher.showRole(); // I am a Teacher, educating students.
```

---

### ✅ **Advantages (Following DIP)**:
✔ `Person` does **not depend** on `Student`, `Accountant`, or `Teacher` directly.  
✔ New roles can be added **without modifying `Person`** (OCP is also followed).  
✔ Code is **loosely coupled**, making it easier to maintain and extend.  

Would you like an example with **dependency injection (DI) instead of classes**? 🚀