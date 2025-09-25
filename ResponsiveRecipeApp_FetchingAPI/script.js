const recipelistCont=document.querySelector('.recipe-list');
const rloader=document.querySelector('.loader');
const recipeDetails=document.querySelector('.recipe-details');


async function fetchListOfRecipes(){
    const response= await fetch('https://dummyjson.com/recipes',{
        method:'GET'
    })

    const result=await response.json();
    if(result && result.recipes && result.recipes.length > 0)displayRecipeList(result.recipes)
    console.log(result);
}

function displayRecipeList(getRecipeList){
    getRecipeList.forEach(recipeItem=>{

        const {name,id,image,cuisine,ingredients,mealType,rating,instructions}=
        recipeItem;
        
        const recipeItemWrapper=document.createElement('div');
        recipeItemWrapper.classList.add('recipe-item');

        //name

        const recipeName=document.createElement('p');
        recipeName.textContent=name;
        recipeName.classList.add('recipe-name');

        //image
        const recipeImg=document.createElement('img');
        recipeImg.src=image;
        recipeImg.classList.add('recipe-Image')
        

        //cuisine

        const recipecuisine=document.createElement('p');
        recipecuisine.textContent=cuisine;
        recipecuisine.classList.add('recipe-cuisine')

        
        //ingredients
        const recipeIngredients=document.createElement('div');
        recipeIngredients.textContent=ingredients.map(item=>item).join(' ');
        recipeIngredients.classList.add('recipe-Ingredients')

        //mealType
        const recipeMealType=document.createElement('p');
        recipeMealType.textContent=mealType;
        recipeMealType.classList.add('recipe-MealType')

        //instruction
        const recipeInstruction=document.createElement('p');
        recipeInstruction.textContent=instructions.map(item=>item)
        
        recipeInstruction.classList.add('recipe-instructions')

        //rating

        const recipeRating=document.createElement('p');
        recipeRating.textContent=rating;
        recipeRating.classList.add('recipe-rating');

        //recipe-details-Button

        const recipeDetailsButton = document.createElement('button');
        recipeDetailsButton.classList.add('recipe-details');
        recipeDetailsButton. innerText="Recipe Details" 
         recipeDetailsButton.addEventListener('click',()=>handleRecipeDetails(id))
         recipeItemWrapper.appendChild(recipeImg);
         recipeItemWrapper.appendChild(recipeName);
         recipeItemWrapper.appendChild(recipecuisine);
         recipeItemWrapper.appendChild(recipeIngredients);
         recipeItemWrapper.appendChild(recipeMealType);
         recipeItemWrapper.appendChild(recipeRating);
         recipeItemWrapper.appendChild(recipeDetailsButton);


         recipelistCont.appendChild(recipeItemWrapper);



    })

}

fetchListOfRecipes();

async function handleRecipeDetails(getId) {
    

    const response=await fetch(`https://dummyjson.com/recipes/${getId}`)
    const result = await response.json();

if(result){
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    })

    displayRecipeDetailsData(result)
}
    
}

    function displayRecipeDetailsData(getRecipeData){

    recipeDetails.innerHTML=`
    <div class="recipe-details-card">
    <h1 class="show"> Ready to be a MasterChef? The secret is in the steps!</h1>
    <h2 class="recipe-title">${getRecipeData.name}</h2>
    <h3 class="inst">Instructions</h3>
    <p class="recipe-instruction">${getRecipeData.instructions}</p>
    </div>
    `
    }



  