const ChangeThemeBtn=document.querySelector('.change_theme_btn');
const body=document.querySelector('body');
const h1=document.querySelector('h1');
ChangeThemeBtn.addEventListener('click',()=>{

    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
        h1.style.color='blue';
    }
    else{
        body.classList.remove('dark')
        body.classList.add('light')
        h1.style.color='yellow';
    }
    

    if(body.classList.contains('light')){
        ChangeThemeBtn.classList.remove('light')
        ChangeThemeBtn.classList.add('dark')

    }
    else{
        ChangeThemeBtn.classList.remove('dark')
        ChangeThemeBtn.classList.add('light')
    }
})