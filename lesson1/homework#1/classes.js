class Human {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.dateOfBirth = data.dateOfBirth;
  }
  displayInfo() {
    return JSON.stringify(this);
  }
}

class Employee extends Human {
  constructor(data) {
    super(data);
    this.salary = data.salary;
    this.department = data.department;
  }
  displayInfo() {
    return super.displayInfo();
  }
}

class Manager extends Employee {
  constructor(data) {
    super(data);
    this.developers = [];
  }
  addDeveloper(developer) {
    this.developers = this.developers.concat(developer);
    developer.changeMyManager(this);
  }
  removeDeveloper(developerToDelete) {
    this.developers = this.developers.filter(developer => {
      return developer !== developerToDelete;
    });
    developerToDelete.changeMyManager(null);
  }
}

class Developer extends Employee {
  constructor(data) {
    super(data);
    this.manager = null;
  }
  changeMyManager(manager) {
    this.manager = manager;
    if (manager && !manager.developers.includes(this)) {
      manager.addDeveloper(this);
    }
  }
}

const data = {
  name: 'Lev',
  age: 19,
  dataOfBirth: 2000,
  salary: 500000,
  department: 'react-redux-development',
};

const developer = new Developer(data);
const manager = new manager(data);
manager.addDeveloper(developer);

console.log(manager);
