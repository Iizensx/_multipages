const fieldWidth = 500;
const fieldHeight = 350;
const diameter = 100;

const maxLeft = fieldWidth - diameter - 2;
const maxTop = fieldHeight - diameter - 2;
const vx = 2;
const vy = 2;

let goRight = true;
let goDown = true;
let x = 0;
let y = 0;
let running = false; // สถานะการทำงาน
let rotation = 0; // ตัวแปรเก็บองศาการหมุนของลูกบอล
const rotationSpeed = 5; // ความเร็วในการหมุน

const runClick = () => {
  running = !running;
  render();
};

const calculate = () => {
  if (goRight) {
    x += vx;
    if (x > maxLeft) {
      goRight = false;
    }
  } else {
    x -= vx;
    if (x < 0) {
      goRight = true;
    }
  }

  if (goDown) {
    y += vy;
    if (y > maxTop) {
      goDown = false;
    }
  } else {
    y -= vy;
    if (y < 0) {
      goDown = true;
    }
  }


  rotation += rotationSpeed;
};

const render = () => {
  // เปลี่ยนจากการใช้ textContent เป็น innerHTML เพื่อให้แสดงไอคอนได้
  document.getElementById('run').innerHTML = running
    ? '<i class="bi bi-stop"></i> Stop'
    : '<i class="bi bi-play"></i> Run';

  // อัปเดตตำแหน่งของลูกบอล
  const ball = document.getElementById("ball");
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  // อัปเดตการหมุนของลูกบอล
  ball.style.transform = `rotate(${rotation}deg)`;
};


const process = () => {
  if (running) {
    calculate();
    render();
  }
};

const initial = () => {
  const ball = document.getElementById("ball");
  ball.style.left = "0px";
  ball.style.top = "0px";
  ball.style.transform = "rotate(0deg)"; 
};

document.addEventListener('DOMContentLoaded', () => {
  initial();


  setInterval(process, 25);

  document.getElementById('run').addEventListener('click', runClick);
});



document.addEventListener('DOMContentLoaded', () => {
  initial();


  setInterval(process, 25);


  document.getElementById('run').addEventListener('click', runClick);

  // document.querySelector('button:nth-child(1)').addEventListener('click', () => {
  //   document.getElementById('ball').style.backgroundImage = 'url("img/bass.png")'; 
  // });

//footbal
  document.querySelector('button:nth-child(2)').addEventListener('click', () => {
    document.getElementById('ball').style.backgroundImage = 'url("img/football.png")'; 
  });
//volley

  document.querySelector('button:nth-child(3)').addEventListener('click', () => {
    document.getElementById('ball').style.backgroundImage = 'url("img/volley.png")'; 
  });

//human
  document.querySelector('button:nth-child(4)').addEventListener('click', () => {
    document.getElementById('ball').style.backgroundImage = 'url("img/human.jpg")'; 
  });

//cartoon
  document.querySelector('button:nth-child(5)').addEventListener('click', () => {
    document.getElementById('ball').style.backgroundImage = 'url("img/cartoon.png" )'; 
  });
//logo
  document.querySelector('button:nth-child(6)').addEventListener('click', () => {
    document.getElementById('ball').style.backgroundImage = 'url("img/facebook-logo.png")'; 
  });

//basketball
document.querySelector('button:nth-child(7)').addEventListener('click', () => {
  document.getElementById('ball').style.backgroundImage = 'url("img/bass.png")'; 
});
});









