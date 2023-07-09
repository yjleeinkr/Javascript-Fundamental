// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

const student = new Student("연정", "이");
console.log(student.firstName); // 속성 가져오기
console.log(student.fullName()); // 객체의 상태, 속성을 가져오는건데도 불구하고 함수를 호출하듯이 부르고 있다.
student.firstName = "yj";
console.log(student.fullName()); // 이 yj

// ❓ 그러면 이렇게 바꾸면 되지 않나?
class Student2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.lastName} ${this.firstName}`;
  }
}

// ❌ 아니다!
const student2 = new Student2("연정", "이");
console.log(student2.fullName); // 이 연정
student2.firstName = "yj"; // 속성 바꿈
console.log(student2.fullName); // 이 연정
// 속성을 바꿨는데도 불구하고 fullName이 그대로다.
// 생성자에서 한번 만들어지고 나서 업데이트가 되지 않는다..
// contructor 함수는 인스턴스를 생성할 때 딱 한번만 실행되서 fullName이 '이 연정'으로 만들어지고 이후에는 constructor 함수가 호출될 일이 없기 때문에 그대로 '이 연정'으로 남아있는 것 student2.fullName = '이 yj' 로 직접 재할당해줘야 값이 변경된다.

// 💯 그래서 쓰는게 접근자 프로퍼티다!
class Student3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 1. 호출하는 시점에 데이터를 만들어서 변경도 가능하고
  // 2. 함수호출 형태가 아닌 프로퍼티 접근하듯이 값을 가져올 수 있다.
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student3 = new Student3("연정", "이");
console.log(student3.fullName); // 이 연정 (접근할 때 get 호출)
student3.firstName = "yj";
console.log(student3.fullName); // 이 yj
student3.fullName = "yj2"; // set yj2 (fullName에 값을 할당하면 set 호출)

// 뭔가를 처리하는 행위는 아닌데 뭔가를 조합해서 만들거나 get, set을 할 때 특정한 일을 해주고 싶을 때 (validation 체크라던지, 값을 제한한다던지) 유용하게 사용 가능하다.
