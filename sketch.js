let input;
let displayText = '';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#9d8189');
  
  // 創建輸入框
  input = createInput();
  input.position(10, 10);
  
  // 當輸入框中的文字改變時，更新 displayText
  input.input(() => {
    displayText = input.value();
  });
}

function draw() {
  background('#9d8189');
  
  // 設定文字樣式
  textSize(32);
  fill(0);
  
  // 顯示輸入框中的文字
  text(displayText, 10, 100);
}

