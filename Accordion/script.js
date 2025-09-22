const data=[
    {
        id:'1',
        question: "Explain hoisting in JavaScript.",
        answer:"Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use variables or call functions before they are explicitly declared in the code. However, only the declarations are hoisted, not the initializations."

    },

     {
        id:'2',
        question: "What is a closure? ",
        answer:"A closure is a function that has access to its outer function's scope even after the outer function has finished executing. Closures remember the environment in which they were created, allowing them to access variables from that outer scope. They are often used for data privacy and creating private variables."

    },

    {
        id:'3',
        question: "What is the difference between == and ===? ",
        answer:" == (loose/abstract equality) performs type coercion before comparing, while === (strict equality) does not, requiring both the value and type to be identical for a true comparison. "
    },


    {
        id:'4',
        question: "What are callback functions?",
        answer:"A closure is a function that has access to its outer function's scope even after the outer function has finished executing. Closures remember the environment in which they were created, allowing them to access variables from that outer scope. They are often used for data privacy and creating private variables."

    },


    {
        id:'5',
        question: "What is a Promise? ",
        answer:"A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It provides a cleaner way to handle asynchronous code compared to nested callbacks and can exist in one of three states: pending, fulfilled, or rejected."

    },
];

const accordian=document.querySelector('.accordian');

function createAccordiandata(){
    accordian.innerHTML=data.map(
        dataItem=>`
        <div class="accord_item">
        <div class="accord_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="accord_conent">
    <p>${dataItem.answer}</p>
</div>
</div>
        `).join("  "); 
}
createAccordiandata()

const accTitles=document.querySelectorAll('.accord_title');
accTitles.forEach(currentItem=>{
    currentItem.addEventListener('click',(event)=>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }
        else{
            let getAlreadyAddedActiveClass=document.querySelectorAll('.active');
            getAlreadyAddedActiveClass.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove('active')
            })

            currentItem.classList.add("active");
        }
    })
})