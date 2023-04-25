let homeEl = document.getElementById("home");
let homeElnum = Number(homeEl.textContent);
let awayEl = document.getElementById("away");
let awayElnum = Number(awayEl.textContent);
let homeScore = document.getElementById("homeS");
let awayScore = document.getElementById("awayS");

function plus1home() {
  /* let a = document.getElementById("test");
  a.textContent = "breh"; */
  /* console.log(homeElnum);
  console.log(homeEl.textContent); */
  let newsum = (homeElnum += 1);
  homeEl.textContent = newsum;
}
function plus2home() {
  let newsum = (homeElnum += 2);
  homeEl.textContent = newsum;
}
function plus3home() {
  let newsum = (homeElnum += 3);
  homeEl.textContent = newsum;
}

function plus1away() {
  /* let a = document.getElementById("test");
  a.textContent = "breh"; */
  /* console.log(homeElnum);
  console.log(homeEl.textContent); */
  let newsum2 = (awayElnum += 1);
  awayEl.textContent = newsum2;
}
function plus2away() {
  let newsum2 = (awayElnum += 2);
  awayEl.textContent = newsum2;
}
function plus3away() {
  let newsum2 = (awayElnum += 3);
  awayEl.textContent = newsum2;
}

function scoreChecker() {
  if (homeElnum > awayElnum) {
    homeScore.style.border = "2px solid white";
    awayScore.style.border = "0";
  } else if (awayElnum > homeElnum) {
    awayScore.style.border = "2px solid white";
    homeScore.style.border = "0";
  } else {
    homeScore.style.border = "0";
    awayScore.style.border = "0";
  }
}
