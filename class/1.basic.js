class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 인스턴스 레벨의 프로퍼티와 메소드
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
  // 모든 객체마다 동일하게 참조해야하는 속성이나 메소드가 있다면
  // 클래스 레벨의 프로퍼티와 메소드를 사용한다.
}

const watermelon = new Fruit("수박", "🍉");
const cherry = new Fruit("체리", "🍒");

console.log(watermelon);
console.log(cherry);
watermelon.display();
cherry.display();
