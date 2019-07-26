class Developer {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.birthday = data.birthday;
  }
  displayInfo() {
    return JSON.stringify(this);
  }
}
module.exports = Developer;
