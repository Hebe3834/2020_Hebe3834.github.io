function greet(){
  var userName = document.getElementById("enterName").value;
  userName ?
  (document.getElementById("wantName").innerHTML = "Nice to meet you " + userName + "!",
  document.getElementById("submit").remove(),
  document.getElementById("enterName").remove()) : 
  document.getElementById("wantName").innerHTML = "But I told you my name..."
}

function smile(){
  document.getElementById("smile").innerHTML += " :)";
  document.getElementById("smile").style.color = "navy";
}

function unsmile(){
  let content = document.getElementById("smile").innerHTML;
  document.getElementById("smile").innerHTML = content.substring(0, content.length-2);
  document.getElementById("smile").style.color = "chocolate";
}

function typing(){
  document.getElementById("enterName").style.backgroundColor = "palegreen";
}

document.getElementById("submit").addEventListener("click", greet);

document.getElementById("enterName").addEventListener("keypress", typing);
document.getElementById("smile").addEventListener("mouseover", smile);
document.getElementById("smile").addEventListener("mouseout", unsmile);
