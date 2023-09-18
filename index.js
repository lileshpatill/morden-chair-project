const catelouge = document.querySelector(".chair");
let color1 = document.querySelector("#cl1");
let color2 = document.querySelector("#cl2");
let color3 = document.querySelector("#cl3");
let color4 = document.querySelector("#cl4");
let color5 = document.querySelector("#cl5");
let color6 = document.querySelector("#cl6");
let backcolor = document.querySelector(".wrapper");
const div = document.querySelector(".images");
const addtoCart = document.querySelector("#btn");
const descBtn = document.querySelector(".description");
const detailBtn = document.querySelector(".details");
const specification = document.querySelector(".specs");
const brief = document.querySelector(".brief");

color1.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair1.png");
  backcolor.style.background = "#863641";
  catelouge.style.animation = "shake 0.5s ";
});

color2.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair2.png");
  backcolor.style.background = "#262626";
  catelouge.style.animation = "shakee 0.6s ";
});
color3.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair3.png");
  backcolor.style.background = "#546E85";
  catelouge.style.animation = "shake3 0.5s ";
});
color4.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair4.png");
  backcolor.style.background = "#688EA5";
  catelouge.style.animation = "shake4 0.5s ";
});
color5.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair5.png");
  backcolor.style.background = "#877A72";
  catelouge.style.animation = "shake5 0.5s ";
});
color6.addEventListener("click", () => {
  catelouge.setAttribute("src", "chair6.png");
  backcolor.style.background = "#606463";
  catelouge.style.animation = "shake6 0.5s ";
});

descBtn.addEventListener("click", () => {
  specification.style.display = "none";
  brief.style.display = "block";
  detailBtn.style = "color:rgba(255, 255, 255, 0.459)";
  descBtn.style = "color:white";
});

detailBtn.addEventListener("click", () => {
  brief.style.display = "none";
  specification.style.display = "block";
  descBtn.style = "color:rgba(255, 255, 255, 0.459)";
  detailBtn.style = "color:white";
});
