/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/
function cakes(recipe, available) {
    //return a count of available - recipe. Only increment the count if recipe can be fully subtracted from count. 
    //loop through and subtract recipe from available. Could check Math.min of each property being subtracted from available keeping a count in another object
    let countObj = {};

    //for each property in recipe
    for(let property in recipe){
        // find the corresponding property in available.
        //If it doesn't exist, return 0
        //If it recipe prop is greater than available, return 0
        if(!available.hasOwnProperty(property) || recipe[property]>available[property]){
            return 0;
        }
        //If recipe prop is less than or equal to available prop, loop - subtract recipe prop from available prop and increment countObj by one until recipe prop is greater than available prop
        while(recipe[property]<=available[property]){
            available[property] -= recipe[property];
            if(countObj[property]){
                countObj[property]++;
            }else{
                countObj[property] = 1;
            }
        }
    }
    return Math.min.apply(null, Object.values(countObj));
  };
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));//2
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));//0