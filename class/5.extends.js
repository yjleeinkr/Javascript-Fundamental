class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("have a meal");
  }
  sleep() {
    console.log("go to sleep");
  }
}

// extends 키워드로 부모 클래스 상속
class Tiger extends Animal {}
const tiger = new Tiger("yellow");
tiger.eat();

class Cat extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모 클래스의 constructor를 호출하면서 인수를 전달한다.
    this.ownerName = ownerName;
  }
  play() {
    console.log(`play with ${this.ownerName}`);
  }
  eat() {
    super.eat(); // 부모 클래스의 eat 메소드를 오버라이딩함
    console.log("고양이가 먹는다");
  }
}

const cat = new Cat("yellow", "yj");
cat.eat();
cat.play();
