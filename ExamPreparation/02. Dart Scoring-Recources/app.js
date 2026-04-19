window.addEventListener("load", solve);

function solve() {
  var playerField = document.getElementById("player");
  var scoreField = document.getElementById("score");
  var roundField = document.getElementById("round");
  var addBtn = document.getElementById("add-btn");
  var scoreboardList = document.getElementById("scoreboard-list");
  var sureList = document.getElementById("sure-list");

  addBtn.addEventListener("click", onAdd);

  function onAdd() {
    var player = playerField.value.trim();
    var score = scoreField.value.trim();
    var round = roundField.value.trim();

    if (player === "" || score === "" || round === "") {
      return;
    }

    var li = document.createElement("li");
    li.className = "dart-item";

    var article = document.createElement("article");

    var pPlayer = document.createElement("p");
    pPlayer.textContent = player;

    var pScore = document.createElement("p");
    pScore.textContent = "Score: " + score;

    var pRound = document.createElement("p");
    pRound.textContent = "Round: " + round;

    article.appendChild(pPlayer);
    article.appendChild(pScore);
    article.appendChild(pRound);

    var editBtn = document.createElement("button");
    editBtn.className = "btn edit";
    editBtn.textContent = "edit";

    var okBtn = document.createElement("button");
    okBtn.className = "btn ok";
    okBtn.textContent = "ok";

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(okBtn);

    scoreboardList.appendChild(li);

    playerField.value = "";
    scoreField.value = "";
    roundField.value = "";

    addBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);
    okBtn.addEventListener("click", onOk);

    function onEdit() {
      playerField.value = player;
      scoreField.value = score;
      roundField.value = round;

      li.remove();
      addBtn.disabled = false;
    }

    function onOk() {
      var finalLi = document.createElement("li");
      finalLi.className = "dart-item";

      var finalArticle = document.createElement("article");

      var finalPPlayer = document.createElement("p");
      finalPPlayer.textContent = player;

      var finalPScore = document.createElement("p");
      finalPScore.textContent = "Score: " + score;

      var finalPRound = document.createElement("p");
      finalPRound.textContent = "Round: " + round;

      finalArticle.appendChild(finalPPlayer);
      finalArticle.appendChild(finalPScore);
      finalArticle.appendChild(finalPRound);

      finalLi.appendChild(finalArticle);
      sureList.appendChild(finalLi);

      li.remove();
      addBtn.disabled = false;
    }
  }
}