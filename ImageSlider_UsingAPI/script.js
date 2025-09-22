const slider=document.querySelector('.slider');
const dotsCont=document.querySelector('.dot_cont');



async function fetchListofImages(){
    try{
        const response=await fetch("https://picsum.photos/v2/list?page=1&limit=5",{
            method:'GET'
        })

        const result=await response.json();

        if (result && result.length>0)displayImages(result)
        console.log(result  );
    }
    catch(error){
        console.log(error);
    }
}

function displayImages(getresult){

    slider.innerHTML=getresult.map
    (item=>`
        <div class="slide">
    <img src=${item.download_url} alt="${item.id}"/>
    </div>
        `).join('');

        dotsCont.innerHTML=getresult.map
        ((item,index)=>`
        <span class="dot ${index===0 ? 'active':' '}" data-slide=${index}></span>
       
        `).join('');

}
fetchListofImages()



//slider function of image
setTimeout(()=>{

const slides= document.querySelectorAll('.slide');
const prev_btn =document.querySelector('.btn-slide-prev');
const next_btn= document.querySelector('.btn-slide-next');
let currentSlide=0;


    function activeDot(slide){
        document.querySelectorAll('.dot').forEach(dotItem=> dotItem.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');


    }
    function changeCurrentSlide(currentSlide){

        slides.forEach((slideItem,index)=>slideItem.style.transform=`translateX(${100*(index-currentSlide )}%)`

)}
changeCurrentSlide(currentSlide)
    next_btn.addEventListener('click',()=>{
        currentSlide++

        if (slides.length - 1 < currentSlide){
            currentSlide=0
        }
        
        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)

    });
    prev_btn.addEventListener('click',()=>{
        currentSlide--;
        if(0>currentSlide){
            currentSlide=slides.length-1;
        }

        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)
    });

    

    dotsCont.addEventListener('click',(event)=>
        {
        if(event.target.classList.contains('dot')){
            const currentSlide=event.target.dataset.slide
            changeCurrentSlide(currentSlide)
            activeDot(currentSlide)

        }
        


    });
},1000)





