/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order118221 = {
  information:{
  customername:"James Franko",
  address:"2155 E Lake Dr",
  city: "Seattle",
  state:"WA",
  zip:11310
  },
  pizza:{
    crust:"thin",
    sauce:"robust marinara",
    cheese: "regular",
    toppings:{
      veggies: "olives, green peppers",
      meats:"pepperoni, ham, sosig"
    },
  sideitems:"breadsticks, bbq wings 6 piece",
  sidesauce:"ranch",
  },
  
  misc:{
  specialInstructions:"cut into squares",
  paymenttype:"cash",
  storeid: 112
  }
}

var order11372 = {
  information:{
  customername:"Justin Beiber",
  address:"1801 W Eodeo Dr",
  city: "Beverly Hills",
  state:"CA",
  zip:91833
  },
  pizza:{
    crust:"stuffed crust",
    sauce:"creamy garlic alfredo",
    cheese: "double",
    toppings:{
      veggies: "onion, anchovies, mushrooms",
      meats:"chicken, bacon"
    },
  sideitems:"double fudge brownie dessert",
  sidesauce:"bbq, garlic sauce"
  },
  misc:{
  specialInstructions:"call 815 at the gate",
  paymenttype:"credit card",
  storeid: 382
  }
}

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
var currentOrders = [
  "ORDER ONE",
  "----------",
  order118221.information,
  order118221.pizza,
  order118221.misc,
  "ORDER TWO",
  "----------",
  order11372.information,
  order11372.pizza,
  order11372.misc
]

console.log(currentOrders)
/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
console.log("CHANGES TO ORDER 11821")
console.log("UPDATING NOW...")

order118221.pizza.sauce = "classic marinara"
order118221.pizza.toppings.veggies = "spinach, olives, green peppers"
order118221.pizza.toppings.meats = "pepperoni, ham"
order118221.misc["orderTime"] = "20 minutes"

console.log("UPDATE COMPLETE, NEW ORDER IS: ")
console.log(order118221)