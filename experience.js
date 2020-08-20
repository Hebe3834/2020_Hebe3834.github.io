
function usaco(){
  if(document.getElementById("usaco").style.background != "steelblue"){
    document.getElementById("usaco").style.background = "steelblue";
    document.getElementById("usaco").style.padding = "10%";
    document.getElementById("usaco").innerHTML = "SILVER CONTESTANT<br><br>Completed the February 2020 USA Computing Olympiad (Bronze) with full scores<br><br>Language used: Java";
  }
  else{
    document.getElementById("usaco").style.background = "white";
    document.getElementById("usaco").style.padding = "0%";
    document.getElementById("usaco").innerHTML = '<img src="https://images.ctfassets.net/mrop88jh71hl/3NEfiekS1me0rqHfiHFz38/7566e5c54c9e374d3996f47e563833c1/Frame_35-min.png" width="100%">';
  }
}

document.getElementById("usaco").addEventListener("click", usaco);


function tkh(){
  if(document.getElementById("tkh").style.background != "indigo"){
    document.getElementById("tkh").style.background = "indigo";
    document.getElementById("tkh").style.padding = "10%";
    document.getElementById("tkh").innerHTML = "CODING FELLOW<br><br>Enhanced HTML, CSS, and JavaScript skills through the Karim Kharbouch Coding Fellowship<br><br>";
  }
  else{
    document.getElementById("tkh").style.background = "white";
    document.getElementById("tkh").style.padding = "0%";
    document.getElementById("tkh").innerHTML = '<img src="https://www1.nyc.gov/assets/dycd/newsletter/_DYCD/TKH_Logo.jpg" width="100%">';
  }
}

document.getElementById("tkh").addEventListener("click", tkh);