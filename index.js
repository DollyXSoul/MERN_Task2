const w = document.documentElement.clientWidth - 150;
const h = document.documentElement.clientHeight - 100;

let imgbox = document.getElementsByClassName("smiley");
let imgbox2 = document.getElementsByClassName("sad");
let popUp = document.getElementsByClassName("popup")[0];
let fimg = document.getElementsByTagName("img");

let liveScore = 0;
let scorePoints = document.getElementById("score_val");
scorePoints.innerHTML = liveScore;

popUp.style.visibility = "hidden";

function showpopup() {
  popUp.style.visibility = "visible";
}

function smiley_img1() {
  imgbox[0].style.display = "block";
  imgbox[0].style.top = Math.floor(Math.random() * h);
  imgbox[0].style.left = Math.floor(Math.random() * w) - 40;
}

function smiley_img2() {
  imgbox[1].style.display = "block";
  imgbox[1].style.top = Math.floor(Math.random() * h);
  imgbox[1].style.left = Math.floor(Math.random() * w) - 40;
}

function smiley_img3() {
  imgbox[2].style.display = "block";
  imgbox[2].style.top = Math.floor(Math.random() * h);
  imgbox[2].style.left = Math.floor(Math.random() * w) - 40;
}

function smiley_img4() {
  imgbox[3].style.display = "block";
  imgbox[3].style.top = Math.floor(Math.random() * h);
  imgbox[3].style.left = Math.floor(Math.random() * w) - 40;
}

function sad_img1() {
  imgbox2[0].style.display = "block";
  imgbox2[0].style.top = Math.floor(Math.random() * h);
  imgbox2[0].style.left = Math.floor(Math.random() * w) - 40;
}

function flat_img() {
  imgbox2[1].style.display = "block";
  imgbox2[1].style.top = Math.floor(Math.random() * h);
  imgbox2[1].style.left = Math.floor(Math.random() * w) - 40;
}
setInterval(smiley_img1, 2000);
setInterval(smiley_img2, 3000);
setInterval(smiley_img3, 4000);
setInterval(smiley_img4, 1000);

setInterval(sad_img1, 1000);

setInterval(flat_img, 2000);
setInterval(flat_img, 1000);

function afterclick(index) {
  liveScore += 10;
  scorePoints.innerHTML = liveScore;
  setTimeout(invisible, 100, index);

  if (liveScore === 100) {
    setInterval(showpopup, 200);
  }
}

function afterclick2(index) {
  liveScore -= 10;
  scorePoints.innerHTML = liveScore;
  setTimeout(invisible2, 100, index);
}

function afterclick3(index) {
  imgbox2[1].style.display = "none";
}

function invisible(index) {
  imgbox[index].style.display = "none";
}
function invisible2(index) {
  imgbox2[index].style.display = "none";
}
