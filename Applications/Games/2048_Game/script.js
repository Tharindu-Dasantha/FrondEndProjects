document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  //   this is the size of the board can add a option to make it larger as it appears
  const width = 4;
  const score = document.getElementById("Score");
  const resultMSG = document.getElementById("result");
  let array = [];
  let answer = 0;

  function func_generate() {
    // Getting a random place in the board
    randomNumber = Math.floor(Math.random() * array.length);
    // if the selected place already have a score, then re roll
    if (array[randomNumber].innerHTML == 0) {
      // Change this later so the number will be equal to some random number based on the lagrgest number on the board
      array[randomNumber].innerHTML = 2;
      gameover();
    } else func_generate();
  }

  // Starting the game creating all the squares based on the size and making two tiles to play the game
  function func_create() {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement("div");
      square.innerHTML = 0;
      array.push(square);
      main.appendChild(square);
    }
    func_generate();
    func_generate();
  }
  func_create();

  function move_left() {
    for (let i = 0; i < width * width; i++) {
      if (i % width === 0) {
        // here left movement is hardcoded regarding the board is fixed at 4 squares but if the size changes find a algorithm to automate this
        let a = array[i].innerHTML;
        let b = array[i + 1].innerHTML;
        let c = array[i + 2].innerHTML;
        let d = array[i + 3].innerHTML;
        let e = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

        // What the hell is this must check
        let change = e.filter((num) => num);
        let lost = 4 - change.length;
        let qq = Array(lost).fill(0);
        let vara = change.concat(qq);

        array[i].innerHTML = vara[0];
        array[i + 3].innerHTML = vara[3];
        array[i + 2].innerHTML = vara[2];
        array[1 + 1].innerHTML = vara[1];
      }
      //   must change all the code in the above class to optimize it in all board sizes
    }
  }

  function move_right() {
    for (let i = 0; i < width * width; i++) {
      if (i % width === 0) {
        let a = arr[i].innerHTML;
        let b = arr[i + 1].innerHTML;
        let c = arr[i + 2].innerHTML;
        let d = arr[i + 3].innerHTML;
        let e = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

        let change = e.filter((num) => num);
        let lost = 4 - change.length;
        let qq = Array(lost).fill(0);
        let vara = qq.concat(change);

        arr[i].innerHTML = vara[0];
        arr[i + 3].innerHTML = vara[3];
        arr[i + 2].innerHTML = vara[2];
        arr[i + 1].innerHTML = vara[1];
      }
    }
  }

  function move_up() {
    for (let i = 0; i < width; i++) {
      let a = arr[i].innerHTML;
      let b = arr[i + width].innerHTML;
      let c = arr[i + width * 2].innerHTML;
      let d = arr[i + width * 3].innerHTML;
      let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

      let filteredColumn = column.filter((num) => num);
      let lost = 4 - filteredColumn.length;
      let qq = Array(lost).fill(0);
      let newColumn = filteredColumn.concat(qq);

      arr[i].innerHTML = newColumn[0];
      arr[i + width].innerHTML = newColumn[1];
      arr[i + width * 2].innerHTML = newColumn[2];
      arr[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function move_down() {
    for (let i = 0; i < width; i++) {
      let a = arr[i].innerHTML;
      let b = arr[i + width].innerHTML;
      let c = arr[i + width * 2].innerHTML;
      let d = arr[i + width * 3].innerHTML;
      let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

      let filteredColumn = column.filter((num) => num);
      let lost = 4 - filteredColumn.length;
      let qq = Array(lost).fill(0);
      let newColumn = qq.concat(filteredColumn);

      arr[i].innerHTML = newColumn[0];
      arr[i + width].innerHTML = newColumn[1];
      arr[i + width * 2].innerHTML = newColumn[2];
      arr[i + width * 3].innerHTML = newColumn[3];
    }
  }
  // all the movement components must change to hangle different sizes

  
});
