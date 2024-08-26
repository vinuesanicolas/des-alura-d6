/*DEAFÍO DÍA 6--REMOCIÓN DE LISTA DE COMPRAS*/

let shoppingList = [];

console.log("¡Bienvenido a tu lista de compras!");

while (true) {
  let action = prompt("¿Deseas agregar, eliminar o terminar? (agregar/eliminar/terminar)");

  if (action.toLowerCase() === "terminar") {
    break;
  } else if (action.toLowerCase() === "agregar") {
    let item = prompt("¿Qué alimento deseas agregar?");
    let category = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces)");

    shoppingList.push({ item: item, category: category });
    console.log(`Agregado "${item}" a la lista de compras.`);
  } else if (action.toLowerCase() === "eliminar") {
    if (shoppingList.length === 0) {
      console.log("La lista de compras está vacía, no hay nada que eliminar.");
    } else {
      console.log("Elementos en la lista de compras:");
      for (let i = 0; i < shoppingList.length; i++) {
        console.log(`[${i}] ${shoppingList[i].item} (${shoppingList[i].category})`);
      }

      let itemToRemove = parseInt(prompt("Ingresa el número del elemento que deseas eliminar:"));

      if (itemToRemove >= 0 && itemToRemove < shoppingList.length) {
        let removedItem = shoppingList.splice(itemToRemove, 1)[0];
        console.log(`Eliminado "${removedItem.item}" de la lista de compras.`);
      } else {
        console.log("¡No fue posible encontrar el elemento en la lista!");
      }
    }
  } else {
    console.log("Por favor, elige una opción válida (agregar/eliminar/terminar).");
  }
}

console.log("\nLista de compras:");

let categories = {
  frutas: [],
  lácteos: [],
  congelados: [],
  dulces: []
};

for (let i = 0; i < shoppingList.length; i++) {
  let item = shoppingList[i];
  categories[item.category.toLowerCase()].push(item.item);
}

for (let category in categories) {
  if (categories[category].length > 0) {
    console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}: ${categories[category].join(", ")}`);
  }
}