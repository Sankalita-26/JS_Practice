const postListCont=document.querySelector('.post-list-cont')

// fetch using XHR


function fetchusingXHR(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.responseType='json';
    xhr.send();
    xhr.onload= ()=>{
        if(xhr.status ===200){
            displayResult(xhr.response)

        }else{
            console.log('some error occure')
        }
    }
}



// fetch using fetch method:



function fetchUsingFetch(){

    const fetchRequest=fetch('https://jsonplaceholder.typicode.com/posts',{

        method:'GET',

    })
    fetchRequest
    .then(response=>response.json())
    .then(result=>displayResult(result))
    .catch(e=>  console.log(e))

}



// using fetchUsingFAsyncAwait()

async function fetchUsingAsyncAwait(){
 const response=await fetch('https://jsonplaceholder.typicode.com/posts',
    {
     method:'GET',
    });

    const result=await response.json();
   displayResult(result)
}

function helperMethod(method,url){
    const promise=new Promise((resolve,reject)=> {
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
        xhr.send();
    xhr.onload= ()=>{
        if(xhr.status ===200){
            resolve(xhr.response)

        }else{
            reject(xhr.response)
        }

    }}
)
return promise;
}

async function fetchUsingXHRandAsyncAwait(){
    const response=await helperMethod('GET','https://jsonplaceholder.typicode.com/posts');
    displayResult(response);  

}





// it will remain same for all. this is for displaying result.

function displayResult(posts){
postListCont.innerHTML=posts.map(
(postItem)=>`
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
</div> 
    `).join(" ");
}



// calling function:


// fetchusingXHR()
// fetchUsingFetch()
// fetchUsing   AsyncAwait()
fetchUsingXHRandAsyncAwait()