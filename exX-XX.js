function startDokyo() {
  var btn = document.getElementById('action-btn');
  btn.innerText = "OK"
  document.getElementById('action-btn').style.display = 'none';
  document.getElementById('status-msg').innerText = "ファイルダウンロード中...";
  countDownFnc(10);
}

function countDownFnc(seconds) {
  var target = document.getElementById('timer-display');
  if (seconds > 0) {
    target.innerText = seconds;
    var next = seconds - 1;
    setTimeout(function() {
      countDownFnc(next);
    }, 1000);
  } else {
    target.innerText = "";
   
    checkUser();
  }
}

function checkUser() {
  var result = confirm("https://JU.kawakado　からハードディスクの全てのデータを削除します。この作業は中断できません。");

  if (result == true) {
    executeFinal();
  } else {
    alert("ダウンロードを開始しますか？。");
    checkUser();
  }
}

function executeFinal() {
  var scaryImg = document.getElementById('scary-image');

  document.body.className = 'inverted';
  scaryImg.src = "image/xxx.png";
  scaryImg.className = 'scary-size';
  
  document.getElementById('main-title').innerText = "システムエラー";
  document.getElementById('status-msg').innerText = "不正なアクセスを検知しました。";

  setTimeout(function(){
    alert("⚠️警告⚠️：システムが破壊されました");
  }, 50);
}
