//This file adds the Pam's Dough tags to the Farmer's Delight Dough

ServerEvents.tags('item', allthemods => {
  //Dough
  allthemods.add('c:dough', 'farmersdelight:wheat_dough')
  allthemods.add('c:dough/dough', 'farmersdelight:wheat_dough')

  //Onions
  allthemods.add('c:onions', 'farmersdelight:onion')

  //Cabbage
  allthemods.add('c:leafyvegetables', 'farmersdelight:cabbage')
})
