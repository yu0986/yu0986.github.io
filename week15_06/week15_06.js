function setup(){//設定 只做一次
  createCanvas(400,200);
  textSize(40);
}
function draw(){//畫圖,每秒60次
  background(41,109,207);
  let s = second();//秒鐘
  text (s,100,100);
}
