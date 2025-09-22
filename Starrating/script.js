const star=document.querySelectorAll('.ri-star-line');
const ratingValText=document.querySelector('.rating_val');


let currentstar=-1;
star.forEach((starItem,index)=>{
    starItem.dataset.rating=index+1;
    starItem.addEventListener('mouseover',handleMouseOver);
    starItem.addEventListener('click',handleOnClick);
    starItem.addEventListener('mouseleave',handleMouseLeave);
})


function handleMouseOver(event){
    const currentRatingVal=event.target.dataset.rating;
    if(!currentRatingVal) return
    else handleUpdatedRatingState(currentRatingVal);


}
function handleUpdatedRatingState(getCurrentRatingValue){
    for(let i=0;i<5;i++)
    {
        if(i<getCurrentRatingValue)
            {
            star[i].classList.replace('ri-star-line','ri-star-fill');
            }
        else{
            star[i].classList.replace('ri-star-fill','ri-star-line');
        }
    }
}
function handleOnClick(event){
     const currentRatingVal=event.target.dataset.rating;
     currentstar=currentRatingVal;
     handleUpdatedRatingState(currentstar);
     ratingValText.textContent=currentstar;


}
function handleMouseLeave(){
   handleUpdatedRatingState(currentstar) 
}