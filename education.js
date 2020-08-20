function ms(){
  let content = document.getElementById("ms").innerHTML;
  document.getElementById("ms").innerHTML = (content==="<h2>Middle School</h2>" ? "<h2>Middle School</h2><p>From 2015 - 2018 I went to<br>Rachel Carson Intermediate<br>School (I.S.237). It was a<br>short ten minute walk from<br>my house and sometimes I<br>really miss the short<br>commute.</p>" : "<h2>Middle School</h2>");
}

document.getElementById("ms").addEventListener("click", ms);

function hs(){
  let content = document.getElementById("hs").innerHTML;
  document.getElementById("hs").innerHTML = (content==="<h2>High School</h2>" ? "<h2>High School</h2><p>From 2018 - 2022 I'll be<br>going to Stuyvesant High<br>School. It's an hour long<br>subway ride all the way to<br>downtown Manhattan but it's<br>worth it. Although it'll be<br>different this year due to<br>remote learning...</p>" : "<h2>High School</h2>");
}

document.getElementById("hs").addEventListener("click", hs);