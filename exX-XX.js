const btn = document.getElementById('action-btn');
const img = document.getElementById('scary-image');
const title = document.getElementById('main-title');
const statusMsg = document.getElementById('status-msg');
const timerDisplay = document.getElementById('timer-display');
btn.addEventListener('click', function() {
   
    document.body.classList.add('inverted');
    btn.style.display = 'none';
    statusMsg.innerText = "ファイルをダウンロード中...";
   
    let seconds = 100;
    timerDisplay.innerText = seconds;

    const countdown = setInterval(function() {
        seconds = seconds - 1;
        timerDisplay.innerText = seconds;

        if (seconds <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "";
        }
    }, 1000);
  
    setTimeout(function() {
       
        img.src = "image/xxx.png";
        img.classList.add('scary-size');
        
        title.innerText = "やばいかも";
        statusMsg.innerText = "開いてしまいましたね。";

        alert("⚠️警告⚠️：システムが破壊されました");

    }, 100000);
});
