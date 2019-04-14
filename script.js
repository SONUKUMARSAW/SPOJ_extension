var timeleft = 5400;
var tags = document.getElementById("problem-tags").innerHTML;
var comments = document.getElementById("ccontent");
function toggleTagsAndComments(){
  document.getElementById("problem-tags").innerHTML =  tags;
  document.getElementById("ccontent").style.display="";
}
document.getElementById("ccontent").style.display="none";
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h >= 0 ? h + (h ==0 ? "0 : " : " : ") : "";
    var mDisplay = m >= 0 ? m + (m == 0 ? "0 : " : " : ") : "";
    var sDisplay = s >= 0 ? s + (s == 0 ? "0" : " ") : "";
    return hDisplay.fontsize(5.8).fontcolor("#cc0000").bold() + mDisplay.fontsize(5).fontcolor("#cc0000").bold() + sDisplay.fontsize(5).fontcolor("#cc0000").bold(); 
}
var downloadTimer = setInterval(function(){
  
  if(timeleft>0){document.getElementById("problem-tags").innerHTML =  "Time left :      ".fontsize(4)+secondsToHms(timeleft);
  
  }
  timeleft -= 1;
  if(timeleft==0){
    document.getElementById("problem-tags").innerHTML="Click Me! for help".fontsize(4);
  }
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("problem-tags").onclick = toggleTagsAndComments;   
  }
}, 1000);



