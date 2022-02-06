document.getElementById('butonas').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='flex';
  
  });

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display="none";
});


/*
var ignoreClickOnMeElement = document.getElementById('box');
var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
 
    
document.querySelector('#testmodal').addEventListener('click',function(){
  if (!isClickInsideElement) {
  document.querySelector('.bg-modal').style.display="none";
  }
});


var card=document.querySelector('.card__inner');
document.getElementById('.login-box').addEventListener('click', function(){
   card.classList.toggle('is-flipped');
});
var ignoreClickOnMeElement = document.getElementById('bg-modal');

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
      document.querySelector('.bg-modal').style.display="none";
    }
});

var box = document.getElementByClass('bg-modal');
window.onclick=function(event) {
    if (event.target == box) {
      box.style.display="none";
    }
});

window.onload=function()
{
  var hidediv=document.getElementById('box');
  document.onclick=function(div)
  {
    if(div.target.id!='box')
    {
      hidediv.style.display="none";
    }
  };
};
*/

var card=document.querySelector('.card__inner');
var but=document.querySelector('.login-box');
but.addEventListener('click',function(){
 card.classList.add('is-flipped');
});


var butt=document.querySelector('.inapoi');
butt.addEventListener('click',function(){
  card.classList.remove('is-flipped');
});



// function isHidden(el) {
//     var style = window.getComputedStyle(el);
//     return (style.display === 'none')
// }


// var ignoreClickOnMeElement = document.getElementById('box');
// document.addEventListener('click', function(event) {
//   var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
//   if (!isClickInsideElement && document.querySelector('.bg-modal').style.display==='flex') {
//     document.querySelector('.bg-modal').style.display="none";
//   }
// });
//   $(document).ready(function () {
// $("body").click(function() {
//   if ($("#testmodal").is(":visible")) {
//       $("#testmodal").hide();
//   }
// });
// });