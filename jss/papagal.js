document.getElementById('butonas').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='flex';
  
  });

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display="none";
});


//var card=document.querySelector('.card__inner');
//document.getElementById('.login-box').addEventListener('click', function(){
   //card.classList.toggle('is-flipped');
//});

//var card=document.querySelector('.card__inner');
//card.addEventListener('click',function(){
 //card.classList.toggle('is-flipped');
//});

var card=document.querySelector('.card__inner');
var but=document.querySelector('.login-box');
but.addEventListener('click',function(){
 card.classList.add('is-flipped');
});


var butt=document.querySelector('.inapoi');
butt.addEventListener('click',function(){
  card.classList.remove('is-flipped');
});


