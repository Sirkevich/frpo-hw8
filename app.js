const grades = {
  Junior: "junior",
  Middle: "middle",
  Senior: "senior",
};

const bonuses = {
  "C++": 100,
  Rust: 150,
  default: 50,
};

const gradeTax = {
  [grades.Junior]: 0.25,
  [grades.Middle]: 0.5,
  [grades.Senior]: 0.75,
};

const fines = {
  truency: 200,
  drunk: 150,
  faildSprint: 300,
  default: 50,
};

const finesTax = {
  [grades.Junior]: 1.75,
  [grades.Middle]: 1.25,
  [grades.Senior]: 1,
};

function User(name, language, grade = grades.Junior) {
  this.name = name;
  this.grade = grade;
  this.salary = 1000;
  this.language = language;
  this.tasks = 0;
  this.successtasks = 0;

  (this.addTask = () => {
    this.tasks++;
  }),
    (this.finishTask = () => {
      if (this.tasks > 0) {
        this.successtasks++;
        this.tasks--;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
    }),
    (this.upgrade = () => {
      if (this.grade === grades.Junior && this.successtasks >= 3) {
        this.grade = grades.Middle;
      } else if (this.grade === grades.Middle && this.successtasks >= 6) {
        this.grade = grades.Senior;
      } else if (this.grade === grades.Senior && this.successtasks >= 12) {
        console.log(this.name + "," + " You can be a Teamlead");
      } else {
        console.warn(
          this.name + "," + " It's not enaugh. You have to work more!"
        );
      }
    }),
    (this.userfins = (fine) => {
      this.salary -=
        (fine || fines.default) * finesTax[this.grade];
    });
}

const user = new User("John", "C++", grades.Junior);
const user1 = new User("Vasya", "Rust", grades.Senior);
const user2 = new User("Nifertiti", "Bu", grades.Middle);

user.addTask();
user.addTask();
user.addTask();
user.addTask();

user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();

user2.addTask();
user2.addTask();
user2.addTask();
user2.addTask();
user2.addTask();
user2.addTask();

user2.finishTask();
user2.finishTask();
user2.finishTask();
user2.finishTask();
user2.finishTask();

user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();

user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();

user.upgrade();
user2.upgrade();
user1.upgrade();

user.userfins(fines.drunk);

console.log(user);
console.log(user2);
console.log(user1);