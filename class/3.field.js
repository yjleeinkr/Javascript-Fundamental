// 접근 제어자 - 캡슐화
// private(#), public(default), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const apple = new Fruit("apple", "🍎");
console.log(apple); // Fruit {} #field는 외부에서 확인이 불가능하다.
// apple.#name = "수박"; // #field는 외부에서 접근이 불가능하다.
