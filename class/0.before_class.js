// ES6 이전 class 가 나오기 전 객체 (인스턴스)를 여러개 만들려면 생성자 함수를 사용했다..

// 생성자 함수
// class 처럼 보통은 대문자로 함수명을 지어준다.
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  // return this; // return문 생략 가능
}

// class 처럼 new 연산자를 붙여 함수를 호출해준다.

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");
console.log(apple);
console.log(orange);
