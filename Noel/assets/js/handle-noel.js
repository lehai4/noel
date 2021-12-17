//get page
window.open = function () {};
window.print = function () {};
// Support hover state for mobile.
if (false) {
  window.ontouchstart = function () {};
}

//mesage
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
function showCountDown() {
  showMessage();
}
function showMessage() {
  swal({
    title: "Lời nhắn",
    text: `Niềm tin làm mọi thứ trở nên khả thi; Hi vọng làm mọi thứ hoạt động và Tình yêu làm mọi thứ đẹp đẽ. Chúc bạn có cả 3 điều ấy trong mùa Giáng Sinh này.`,
    button: {
      text: "️tym",
    },
  });
}

// canvas tuyết
const canvas = document.getElementById("canvas");

const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
c.beginPath();
c.arc(100, 100, 7, 0, Math.PI * 2);
c.shadowColor = "#fff";
c.shadowBlur = 5;
c.fillStyle = "#fff";
c.fill();
c.closePath();

function snow() {
  this.radius = Math.random() * 5;
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = 100;
  this.color = "#FFF";
  this.speed = {
    x: Math.random() * 4 - 2,
    y: Math.random() * 3 + 2,
  };
}

snow.prototype.draw = function () {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  c.shadowColor = this.color;
  c.shadowBlur = 5;
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
};
snow.prototype.update = function () {
  this.x += this.speed.x;
  this.y += this.speed.y;

  if (this.y >= canvas.height) this.speed.y = 0;

  this.draw();
};
const arr = [];

function init() {
  arr.push(new snow());
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  arr.forEach(function (item) {
    item.update();
  });
  if (arr.length > 1000) {
    arr.splice(0, 1);
  }
  init();
  window.requestAnimationFrame(animate);
}

animate();
