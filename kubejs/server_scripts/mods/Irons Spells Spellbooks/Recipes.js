// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  let fill = allthemods.recipes.irons_spellbooks.alchemist_cauldron_fill;
  let brew = allthemods.recipes.irons_spellbooks.alchemist_cauldron_brew;
  let empty = allthemods.recipes.irons_spellbooks.alchemist_cauldron_empty;

  fill("1000x minecraft:water", "reliquary:emperor_chalice", "reliquary:emperor_chalice", false, "irons_spellbooks:cast.generic.lightning");
  empty('irons_spellbooks:blood_vial', 'minecraft:glass_bottle', "250x evilcraft:blood").id('allthemods:irons_spellbooks/alchemist_cauldron/empty_blood_vial')
  brew([], "irons_spellbooks:hogskin", "1000x evilcraft:blood", 'irons_spellbooks:bloody_vellum').id('allthemods:irons_spellbooks/alchemist_cauldron/soak_bloody_vellum')

  allthemods
    .custom({
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'create',
        },
      ],
      type: 'create:filling',
      ingredients: [
        {
          item: 'minecraft:glass_bottle',
        },
        {
          type: 'neoforge:tag',
          tag: 'atm10:blood',
          amount: 250,
        },
      ],
      results: [
        {
          id: 'irons_spellbooks:blood_vial',
        },
      ],
    }).id('irons_spellbooks:create_compat/create_fill_blood_vial');
    
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.