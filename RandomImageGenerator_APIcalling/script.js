const imagesWrapper=document.querySelector('.images-wrapper');
const LoadMoreBtn=document.querySelector('.loadmoreimg')

let count=1;
function fetchRandomImages(getCount){

    for(let i=getCount ; i<getCount + 4 ; i++){
        let imgElement=document.createElement('img');
        imgElement.src=`https://picsum.photos/300?random=${i}`
        imagesWrapper.appendChild(imgElement);
    }


    count+=5
}

fetchRandomImages(count)
LoadMoreBtn.addEventListener('click',()=>{
    fetchRandomImages((count += 4));
})