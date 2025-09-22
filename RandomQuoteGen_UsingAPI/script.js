const wrapper= document.querySelector('.quote-wrapper');
const btn=document.querySelector('.btn');
const loader=document.querySelector('.loading_data');
function showLoader(){
    loader.classList.add('show')
    wrapper.classList.add('hide')
}

function removeLoader(){
 loader.classList.remove('show')
    wrapper.classList.remove('hide')
}

function fetchRandomQuote() {

    showLoader()
    fetch("https://dummyjson.com/quotes/random")
        .then((response) => response.json())
        .then((quote) => {
            if(quote){
                removeLoader()
                displayQuote(quote)
            }
        })
        .catch((e) => console.log(e));
}

function displayQuote(getQuote)
{
    console.log(getQuote); ;
    wrapper.innerHTML=
    `<div class="item">
    <p class="auth">${getQuote.author}</p>
    <p>${getQuote.quote}</p>
</div>`;
    
   
}

fetchRandomQuote();


btn.addEventListener('click',()=>
{
fetchRandomQuote();
}
)