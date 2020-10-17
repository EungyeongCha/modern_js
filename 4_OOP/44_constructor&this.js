// Person constructor
function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person('brad', 36);
// const john = new Person('john', 30);

// console.log(brad, john);

const brad = new Person('Brad', '6-3-1995');
console.log(brad.calculateAge());
