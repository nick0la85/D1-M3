window.addEventListener('load', function() {
    let twitterLink = document.getElementById("twitter")
    
    if (twitterLink) {
       twitterLink.parentNode.removeChild(twitterLink)
      }
    
  });

let autori=document.getElementsByClassName("autore")
for (var index = 0; index < autori.length; index++) { 
    let nome=autori[index].innerHTML;
  autori[index].addEventListener('mouseover', function(event) {
  alert(nome);
  });
}