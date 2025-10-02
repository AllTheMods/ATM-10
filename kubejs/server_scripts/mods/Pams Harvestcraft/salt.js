// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Standardizing salt use in some of Pam's recipes.

ServerEvents.recipes(allthemods => {
allthemods.replaceInput(
  {input:'pamhc2foodcore:saltitem'},
  'pamhc2foodcore:saltitem',
  '#c:dusts/salt'
  )
});

ServerEvents.tags('item', event => {
    event.add('#c:dusts/salt', 'pamhc2foodcore:saltitem')
    event.add('#c:dusts', 'pamhc2foodcore:saltitem')
    event.add('#c:raw_materials', 'pamhc2foodcore:saltitem')
    event.add('#minecolonies:reduceable_ingredient', 'pamhc2foodcore:saltitem')
    event.add('#supplementaries:hourglass_dusts', 'pamhc2foodcore:saltitem')
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
