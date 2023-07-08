class Fruit {
  static MAX_FRUIT = 4; // 클래스 레벨의 프로퍼티
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메소드
  static makeRandomFruit() {
    // 클래스 레벨 메소드에서는 this를 참조할 수 없다.
    return new Fruit("apple", "🍎");
  }
  // 인스턴스 레벨의 메소드
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}
const apple = Fruit.makeRandomFruit();
console.log(apple); // Fruit { name: 'apple', emoji: '🍎' }
console.log(Fruit.MAX_FRUIT);
