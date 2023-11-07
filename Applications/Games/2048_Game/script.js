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
        let a = array[i].innerHTML;
        let b = array[i + 1].innerHTML;
        let c = array[i + 2].innerHTML;
        let d = array[i + 3].innerHTML;
        let e = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

        let change = e.filter((num) => num);
        let lost = 4 - change.length;
        let qq = Array(lost).fill(0);
        let vara = qq.concat(change);

        array[i].innerHTML = vara[0];
        array[i + 3].innerHTML = vara[3];
        array[i + 2].innerHTML = vara[2];
        array[i + 1].innerHTML = vara[1];
      }
    }
  }

  function move_up() {
    for (let i = 0; i < width; i++) {
      let a = array[i].innerHTML;
      let b = array[i + width].innerHTML;
      let c = array[i + width * 2].innerHTML;
      let d = array[i + width * 3].innerHTML;
      let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

      let filteredColumn = column.filter((num) => num);
      let lost = 4 - filteredColumn.length;
      let qq = Array(lost).fill(0);
      let newColumn = filteredColumn.concat(qq);

      array[i].innerHTML = newColumn[0];
      array[i + width].innerHTML = newColumn[1];
      array[i + width * 2].innerHTML = newColumn[2];
      array[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function move_down() {
    for (let i = 0; i < width; i++) {
      let a = array[i].innerHTML;
      let b = array[i + width].innerHTML;
      let c = array[i + width * 2].innerHTML;
      let d = array[i + width * 3].innerHTML;
      let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)];

      let filteredColumn = column.filter((num) => num);
      let lost = 4 - filteredColumn.length;
      let qq = Array(lost).fill(0);
      let newColumn = qq.concat(filteredColumn);

      array[i].innerHTML = newColumn[0];
      array[i + width].innerHTML = newColumn[1];
      array[i + width * 2].innerHTML = newColumn[2];
      array[i + width * 3].innerHTML = newColumn[3];
    }
  }
  // all the movement components must change to hangle different sizes

  function add_row() {
    for (let i = 0; i < width * width - 1; i++) {
      if (array[i].innerHTML === array[i + 1].innerHTML) {
        let sum =
          parseInt(array[i].innerHTML) + parseInt(array[i + 1].innerHTML);
        array[i].innerHTML = sum;
        array[i + 1].innerHTML = 0;
        answer += sum;
        score.innerHTML = answer;
      }
    }
    check();
  }

  function combine_columns() {
    // why the 12 is here check this
    for (let i = 0; i < 12; i++) {
      if (array[i].innerHTML === array[i + width].innerHTML) {
        let sum =
          parseInt(array[i].innerHTML) + parseInt(array[i + width].innerHTML);
        array[i].innerHTML = sum;
        array[i + width].innerHTML = 0;
        answer += sum;
        score.innerHTML = answer;
      }
    }
    check();
  }

  function navigation(e) {
    if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 39) {
      keyRight();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }
  document.addEventListener("keyup", navigation);

  function keyRight() {
    move_right();
    add_row();
    move_right();
    func_generate();
  }
  function keyLeft() {
    move_left();
    add_row();
    move_left();
    func_generate();
  }
  function keyUp() {
    move_up();
    combine_columns();
    move_up();
    func_generate();
  }
  function keyDown() {
    move_down();
    combine_columns();
    move_down();
    func_generate();
  }

  function check() {
    for (let i = 0; i < array.length; i++) {
      if (array[i].innerHTML == 2048) {
        resultMSG.innerHTML = "CONGRATULATIONS!!! YOU HAVE WON.";
        document.removeEventListener("keyup", navigation);
        setTimeout(() => {
          clear(), 3000;
        });
      }
    }
  }

  function gameover() {
    let qq = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].innerHTML === 0) {
        
        qq++;
      }
    }
    if (qq === 0) {
      resultMSG.innerHTML = "YOU HAVE LOST";
      document.removeEventListener("keyup", navigation);
      setTimeout(() => clear(), 3000);
    }
  }

  function clear() {
    clearInterval(timer);
  }

  function color() {
    for (let i = 0; i < array.length; i++) {
      // Add colors to every posible number make it interactive
      if (array[i].innerHTML == 0) array[i].style.backgroundColor = "#afa192";
      else if (array[i].innerHTML == 2)
        array[i].style.backgroundColor = "#eee4da";
    }
  }
  color();

  var timer = setInterval(color, 50);
});
