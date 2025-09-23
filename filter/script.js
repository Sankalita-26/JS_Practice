const categories=[
    'All','Men','Women','Kids'
];

const content=[
{
    id:'Men',
    label:'Men Shirt1'
},

{
    id:'Men',
    label:'Men Shirt2'
},

{
    id:'Men',
    label:'Men Shirt3'
},

{
    id:'Men',
    label:'Men Shirt4'
},

{
    id:'Women',
    label:'Women Shirt1'
},

{
    id:'Women',
    label:'Women Shirt2'
},

{
    id:'Women',
    label:'Women Shirt3'
},

{
    id:'Women',
    label:'Women Shirt4'
},




{
    id:'Kids',
    label:'Kids Shirt1'
},

{
    id:'Kids',
    label:'Kids Shirt2'
},

{
    id:'Kids',
    label:'Kids Shirt3'
},

{
    id:'Kids',
    label:'Kids Shirt4'
},
]

const FilterButton=document.querySelector('.filter-button-wrapper');
const contentWrapper=document.querySelector('.content-wrapper');


function createCategory(){
    categories.forEach(category=>{
        const buttonEle=document.createElement('button');
        buttonEle.innerText=category;
        buttonEle.classList.add('filter-button');
        buttonEle.setAttribute('data-filter',category);

        FilterButton.appendChild(buttonEle)
        })
}


function createContent(){
    content.forEach(ContentItem=>{
        const singlContentItem=document.createElement('div');
        singlContentItem.classList.add('card', ContentItem.id);
        singlContentItem.textContent=ContentItem.label;
        contentWrapper.appendChild(singlContentItem);
    });
}


createCategory()
createContent()



const allFilterButtons=document.querySelectorAll('.filter-button');
const allCard=document.querySelectorAll('.card');
function filterCardsByCategory(extract,allCard){
    allCard.forEach(item=>{
    const isShowAllCards=extract.toLowerCase() ==='all';
    const isItemFiltered=!item.classList.contains(extract)


    if(isItemFiltered && !isShowAllCards){
        item.classList.add('hide');

    }
    else{
        item.classList.remove('hide');
    }
    })
}


allFilterButtons.forEach(singleFilterButton=>{
    singleFilterButton.addEventListener('click',()=>{
        const extract = singleFilterButton.dataset.filter; // Men, Women, Kids, All
        console.log(extract);
        filterCardsByCategory(extract,allCard)
        
    })
})