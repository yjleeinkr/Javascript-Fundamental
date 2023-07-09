// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자.
// 직원들 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급 계산 가능
// 정직원은 10000원/h 파트타임 직원은 8000/h

class Employee {
  constructor(name, dept, monthlyWorkingTime, payRate) {
    this.name = name;
    this.dept = dept;
    this.monthlyWorkingTime = monthlyWorkingTime;
    this.payRate = payRate;
  }

  get monthlyPay() {
    return this.monthlyWorkingTime * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, dept, monthlyWorkingTime) {
    super(name, dept, monthlyWorkingTime, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, dept, monthlyWorkingTime) {
    super(name, dept, monthlyWorkingTime, PartTimeEmployee.#PAY_RATE);
  }
}

const yj = new FullTimeEmployee("yj", "dev", 160);
console.log(yj.monthlyPay);
const hoochu = new PartTimeEmployee("hoochu", "cat", 10);
console.log(hoochu.monthlyPay);
