const container=document.querySelector('.container');
const btn=document.querySelectorAll('.tab-btn');
const content=document.querySelectorAll('.content');


container.addEventListener('click',(event)=>{
    console.log(event.target.dataset);
    const current=event.target.dataset.id;

    if(current){
        btn.forEach(btn=>{
            btn.classList.remove('active')
        })
       event.target.classList.add('active')

       content.forEach(content=>{
            content.classList.remove('active');
        })
       const currentElement=document.getElementById(current);
       currentElement.classList.add('active');
   }
})

