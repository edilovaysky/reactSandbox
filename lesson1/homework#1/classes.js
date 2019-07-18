class Human {
  constructor() {
    this.name = "";
    this.age;
    this.dateOfBirth = "";
  }
  displayInfo() {
    return `name: ${this.name};  age: ${this.age};  birthday: ${
      this.dateOfBirth
    };`;
  }
}

class Employee extends Human {
  constructor() {
    super();
    this.salary;
    this.department = "";
  }
  displayInfo() {
    const human = super.displayInfo();
    console.log(
      `${human}  department: ${this.department};  month-salary: ${
        this.salary
      } RUR;`
    );
  }
}

class Meneger extends Employee {
  constructor() {
    super();
    this.managerId = "";
    this.developers = [];
  }
  addDeveloper() {
    this.developers.push(new Developer());
  }
  removeDeveloper(id) {
    for (let i = 0; i < this.developers.length; i++) {
      if (Object.keys(this.developers[i].developerId) === id) {
        this.developers.splice(i, 1);
      }
    }
  }
  displayDevelopers() {
    console.log(this.developers);
  }
}

class Developer extends Employee {
  constructor() {
    super();
    this.developerId = "";
    this.managers = [];
    this.myManager = "";
  }
  displayMyManager() {
    console.log(this.myManager);
  }
  changeMyManager(id) {
    for (let i = 0; i < this.managers.length; i++) {
      if (Object.keys(this.managers[i].managerId) === id) {
        return (this.myManager = id);
      }
    }
  }
}
