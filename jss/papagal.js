document.getElementById('butonas').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='flex';
  
  });

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display="none";
});


//document.getElementById('.login-box').addEventListener('click',function(){
//  document.querySelector('card__inner')
 // card.classList.toggle('is-flipped');
//});

const card=document.querySelector('.card__inner');

card.addEventListener('click', function(){
  card.classList.togglet('is-flipped');
});
