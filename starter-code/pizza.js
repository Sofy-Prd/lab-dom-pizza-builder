// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenp) {
    if (state.greenPeppers) {
      $greenp.style.visibility = "visible";
    } else {
      $greenp.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  var total = basePrice;
  var $list = document.querySelector(".panel.price ul");
  $list.innerHTML = "";

  if (state.pepperonni) {
    total += ingredients.pepperonni.price;
    $list.innerHTML += `<li> $ ${ingredients.pepperonni.price} ${ingredients.pepperonni.name} </li>`;
    document.querySelector(".panel.price strong").innerHTML = "$" + total;
  }

  if (state.mushrooms) {
    total += ingredients.mushrooms.price;
    $list.innerHTML += `<li> $ ${ingredients.mushrooms.price} ${ingredients.mushrooms.name} </li>`;
    document.querySelector(".panel.price strong").innerHTML = "$" + total;
  }

  if (state.greenPeppers) {
    total += ingredients.greenPeppers.price;
    $list.innerHTML += `<li> $ ${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name} </li>`;
    document.querySelector(".panel.price strong").innerHTML = "$" + total;
  }

  if (state.whiteSauce) {
    total += ingredients.whiteSauce.price;
    $list.innerHTML += `<li> $ ${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name} </li>`;
    document.querySelector(".panel.price strong").innerHTML = "$" + total;
  }

  if (state.glutenFreeCrust) {
    total += ingredients.whiteSauce.price;
    $list.innerHTML += `<li> $ ${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name} </li>`;
    document.querySelector(".panel.price strong").innerHTML = "$" + total;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
