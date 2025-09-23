const OpenModalBtn=document.querySelector('.openModal');
const Modal_bg=document.querySelector('.modal_background');
const CloseBtn=document.querySelector('.close');
const Close=document.querySelector('.close_btn');
OpenModalBtn.addEventListener("click",()=>{
    Modal_bg.style.display="block";
});

CloseBtn.addEventListener("click",()=>{
    Modal_bg.style.display="none";
});
Close.addEventListener("click",()=>{
    Modal_bg.style.display="none";
});