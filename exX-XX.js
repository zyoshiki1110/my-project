function startDokyo() {
    
    document.getElementById('action-btn').style.display = 'none';
    document.getElementById('status-msg').innerText = "ファイルをダウンロード中...";
    
    countDownFnc(10);
}

function countDownFnc(seconds) {
    var target = document.getElementById('timer-display');
    
    if (seconds > 0) {
        target.innerText = seconds;
       
        var nextSeconds = seconds - 1;
        
        setTimeout(function() {
            countDownFnc(nextSeconds);
        }, 1000);
    } else {
        target.innerText = "";
        showDokkiri();
    }
}

function showDokkiri() {
    var scaryImg = document.getElementById('scary-image');
    
    
    document.body.className = 'inverted';
    scaryImg.src = "image/xxx.png";
    scaryImg.className = 'scary-size';
    
    document.getElementById('main-title').innerText = "システムエラー";
    document.getElementById('status-msg').innerText = "不正なアクセスを検知しました。";

    alert("⚠️警告⚠️：システムが破壊されました");
}
