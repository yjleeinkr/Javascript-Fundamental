// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
  #count;
  constructor(startNum = 0) {
    if (isNaN(startNum) || startNum < 0) {
      this.#count = 0;
    } else {
      this.#count = startNum;
    }
  }
  up() {
    this.#count++;
  }
  get count() {
    return this.#count;
  }
}

const counter = new Counter(-1);
console.log(counter.count);
counter.up();
console.log(counter.count);
