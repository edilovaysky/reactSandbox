const Developer = require('./developer');
const data = {
  firstName: 'John',
  lastName: 'Smith',
  birthday: '2000',
};

const developer = new Developer(data);
const info = JSON.parse(developer.displayInfo(data));

console.log(
  `\n Имя: ${info.firstName} \n Фамилия: ${info.lastName} \n Год рождения: ${
    info.birthday
  }г.`
);
