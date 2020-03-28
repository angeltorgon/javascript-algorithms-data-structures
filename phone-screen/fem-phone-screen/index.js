/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/


/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];
/* DO NOT MODIFY */


/** YOUR CODE BELOW **/

class FoodsClass {
    constructor(rootElement, foodData) {
        this.rootElement = rootElement;
        this.foodData = foodData;
    }

    renderFoods() {
        // crete container
        this.rootElement.addEventListener("click", ({target}) => {
            target.remove()
        }) 
        let fragment = document.createDocumentFragment("div");

        for(let food of this.foodData){
            // create foodImage tag and text
            let foodImage = document.createElement("p");
            let foodImageText = document.createTextNode(food.image);
            foodImage.appendChild(foodImageText);

            // create food name tag and text
            let foodName = document.createElement("h1");
            let foodNameText = document.createTextNode(food.name);
            foodName.appendChild(foodNameText);

            // append all food tags to container
            fragment.appendChild(foodImage)
            fragment.appendChild(foodName)

        this.rootElement.append(fragment);
            // added styles
        }

    }
}

const foodsInstance = new FoodsClass(rootElement, foodData)
foodsInstance.renderFoods();