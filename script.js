let btn=document.querySelector('.submit-btn');
let ratingBox= document.querySelector('.rating-box');
let thankYouBox= document.querySelector('.thank-you');
let rating=document.querySelectorAll('.rating');


//Set Rating
rating.forEach((rate)=>{
    
    rate.addEventListener('click',()=>{
        rate.style.backgroundColor='hsl(25, 97%, 53%)';
        let rated=rate.innerText;
        let thankYouRate=document.querySelector('.rate .rated').innerText=rated;

//Submit Event
        btn.addEventListener('click', ()=>{
            if(ratingBox.classList.contains('active')){
                ratingBox.classList.remove('active');
            }else{
                ratingBox.classList.add('active');
                thankYouBox.classList.remove('active')
        
            }
        });
       
    });

});














    
   





